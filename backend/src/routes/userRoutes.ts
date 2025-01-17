import express from "express"
import { Request, Response } from "express"         //Request and Response are types from the Express library, and we need to explicitly import them to make TypeScript aware of their usage.
import { Router } from "express"
import { User } from "../models/userModel"
import zod from "zod"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config()

const app = express()
const userRoute = Router()

app.use(express.json());

userRoute.post("/signup", async(req:Request, res:Response) => {

    // 1. Input validation
    const validInput = zod.object({
        firstname : zod.string().min(2).max(100),
        lastname : zod.string().min(2).max(100),
        email : zod.string().email().max(100),
        password : zod.string()
        .min(6, "Password must be at least 6 characters long")
        .max(100)
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[\W_]/, "Password must contain at least one special character")
    })
    const validateInputData = validInput.safeParse(req.body)

    // if input validation failed
    if(!validateInputData.success){
        res.status(411).json({
            message: "Invalid Inputs!",
            error: validateInputData.error.errors
        });
        return;         
    }

    // if input successfully validated
    const { firstname, lastname, email, password } = req.body
    
    //checking if user already exists
    const findUser = await User.findOne({email:email});

    if(findUser){
        res.status(403).json({
            message: "User already exists!"
        })
        return;
    }

    // finally - hash password and save the data in the db

    const hashedPassword = await bcrypt.hash(password,10);

    try {
        await User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashedPassword
        });
    
        res.status(200).json({
            message: "User Signed Up Successfully!"
        });
    } catch (error) {
        console.log("Error Signing Up!\nError : ",error);
        return;
    }
})



userRoute.post("/signin", async(req:Request, res:Response) => {

    const {email, password} = req.body;

    const findUser = await User.findOne({
        email:email
    });

    if(!findUser){
        res.status(403).json({
            message: "User not found!"
        })
        return;
    }

    const checkPassword = await bcrypt.compare(password,findUser.password as string);

    if(!checkPassword){
        res.status(411).json({
            message: "Wrong Password!"
        })
        return;
    }

    const token = jwt.sign({
        id : findUser._id.toString()
    },process.env.JWT_SECRET as string)

    res.status(200).json({
        message: "user logged in successfully!",
        token: token
    })


})

export default userRoute;