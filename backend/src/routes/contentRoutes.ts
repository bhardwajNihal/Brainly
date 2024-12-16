import express from "express"
const app = express()

import { Router } from "express"
const contentRoute = Router()

import { Request, Response } from "express"         //Request and Response are types from the Express library, and we need to explicitly import them to make TypeScript aware of their usage.

app.use(express.json())

// add content route
contentRoute.post("/", (req:Request, res:Response) => {
    res.send("content added")
})

// delete content
contentRoute.delete("/", (req:Request, res:Response) => {
    res.send("content deleted")
})

// preview all content
contentRoute.get("/", (req:Request, res:Response) => {
    res.send("list of content")
})  


export default contentRoute