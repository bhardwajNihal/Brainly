import express from "express"
import { Router } from "express"
import { Request, Response } from "express"         //Request and Response are types from the Express library, and we need to explicitly import them to make TypeScript aware of their usage.
import { Content } from "../models/contentModel"
import { Tag } from "../models/tagModel"
import { Link } from "../models/sharelinkModel"
import { userAuth } from "../middlewares/Auth"

import { generateRandomHash } from "../utils/hashlink"

const app = express()
const contentRoute = Router()



app.use(express.json())

// add content route
contentRoute.post("/", userAuth, async(req:Request, res:Response) => {


    const userId = req.userId
    const { title, link, type, tags } = req.body;

    await Content.create({
        title,
        link,
        type,
        tags:[],
        userId
    })

    res.status(200).json({
        mesage: "content added successfully!"
    })

})

// view all content
contentRoute.get("/", userAuth, async(req:Request, res:Response) => {

    const userId = req.userId;

    const content = await Content.findOne({
        userId: userId,
    }).populate("userId","firstname lastname email")

    res.status(200).json({
        content
    })
})  

// delete content
contentRoute.delete("/",userAuth, async(req:Request, res:Response) => {

    const userId = req.userId;
    const contentId = req.body.contentId;

    await Content.deleteMany({
        _id : contentId,
        userId : userId
    })

    res.status(200).json({
        message: "Content deleted successfully!"
    })

})


// create a shareable link
contentRoute.post("/share", userAuth, async(req:Request, res:Response) => {
    
    const share = req.body.share;
    const userId = req.userId;

    if(share) {
        const hash = generateRandomHash(20);

        const findLink = await Link.findOne({userId});

        if(!findLink){
            await Link.create({
                hash,
                userId      
            })
    
            res.json({
                message: "hash create successfully!!",
                hash: hash
            })
            return;
        }
        res.status(411).json({
            message: "shareable link already exists for the user!!!"
        })
        
    }
    else{
        await Link.deleteOne({
            userId
        })

        res.status(403).json({
            message: "link deleted!!!"
        })
    }
    
    
    
    
})

// view the shareable content
contentRoute.get("/share:link", (req:Request, res:Response) => {

})


export default contentRoute