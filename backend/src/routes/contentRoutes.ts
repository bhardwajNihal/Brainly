import express, { response } from "express"
import { Router } from "express"
import { Request, Response } from "express"         //Request and Response are types from the Express library, and we need to explicitly import them to make TypeScript aware of their usage.
import { Content } from "../models/contentModel"
import { Sharelink } from "../models/sharelinkModel"
import { userAuth } from "../middlewares/Auth"

import { generateRandomHash } from "../utils/hashlink"
import { User } from "../models/userModel"
import { log } from "console"

const app = express()
const contentRoute = Router()



app.use(express.json())

// add content route
contentRoute.post("/", userAuth, async(req:Request, res:Response) => {


    const userId = req.userId
    const { title, link, type } = req.body;

    try {
        await Content.create({
            title,
            link,
            type,
            userId
        })
    
        res.status(200).json({
            message: "Content Added Successfully!"
        })
    } catch (error) {
        console.log("Error adding content!", error);
        
    }

})

// view all content
contentRoute.get("/", userAuth, async(req:Request, res:Response) => {

    const userId = req.userId;

    const content = await Content.find({
        userId: userId,
    }).populate("userId","firstname lastname email")

    res.status(200).json({
        content:content
    })
})  

contentRoute.post("/getCardData",userAuth, async(req:Request, res:Response) => {
    const userId = req.userId;
    const title = req.body.title;

    const response = await Content.find({
        userId,
        title
    })

    res.json({
        response
    })
})

// delete content
contentRoute.delete("/:contentId",userAuth, async(req:Request, res:Response) => {

    const userId = req.userId;
    const contentId = req.params.contentId;

    try {
        const response = await Content.deleteMany({
            _id : contentId,
            userId : userId
        })
        res.status(200).json({
            message: "Content deleted successfully!"
        })
    } catch (error) {
        console.log("Error Deleting content", error);
    }

})


// create a shareable link
contentRoute.post("/brain/share", userAuth, async(req:Request, res:Response) => {
    
    const userId = req.userId;

    const findLink = await Sharelink.findOne({userId});

    if(!findLink){
        const hash = generateRandomHash(20);
        await Sharelink.create({
            hash: hash,
            userId: userId,
            share: req.body.share
        })
        res.json({
            message: "hash created successfully!",
            hash : hash
        })
        
    }

    else{
        const findhash = await Sharelink.findOne({userId})
        await Sharelink.updateOne({
            userId: req.userId
        },{
            $set : {share : req.body.share}
        })
        res.json({
            message : "Hash updated successfully!",
            hash: findhash?.hash
        })
    }

})

// view the shareable content
contentRoute.get("/brain/:sharelink", async(req:Request, res:Response) => {
    
    const hash = req.params.sharelink;

    const findhash = await Sharelink.findOne({hash});

    if(findhash && findhash.share === true){
        
        const findUser = await User.findOne({
            _id : findhash.userId
        });
        if(!findUser){
            res.json({
                message: "User not found!"
            })
            return;
        }
        const findContent = await Content.find({
            userId: findhash.userId
        });
    
        res.json({
            username : `${findUser?.firstname} ${findUser?.lastname}`,
            content : findContent,
            
        })
        return;
    }

    res.json({
        message : "Sharelink invalid or sharing is disabled!!!"
    })
    return;

    
   
})


export default contentRoute