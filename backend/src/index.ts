// declaring type of userId globally
declare global {
    namespace Express{
        export interface Request{
            userId?:string;
        }
    }
}


import express from "express" 
import cors from 'cors'
const app = express()
app.use(cors())

import ConnectionToDB from "./db/db_connection"

app.use(express.json())             //essential when working with JSON payloads in requests, especially for POST and DELETE methods.

//routes
import userRoute from "./routes/userRoutes"
import contentRoute from "./routes/contentRoutes"

app.use("/api/v1/user", userRoute);
app.use("/api/v1/content", contentRoute)


ConnectionToDB()
.then( () =>
        app.listen(3000, () => {
        console.log("server listening at port 3000!");
    })
).catch((error) => {
    console.log("DB connection failed!",error);
})    
