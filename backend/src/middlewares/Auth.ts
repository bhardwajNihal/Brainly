import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const userAuth = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers["authorization"];

    const verifiedToken = jwt.verify(token as string, process.env.JWT_SECRET as string );

    if(!verifiedToken){
        res.status(404).json({
            message: "Invalid token! Please log in again!"
        })
        return;
    }

    //@ts-ignore
    req.userId = verifiedToken.id;
    next()
}