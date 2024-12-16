import express from "express" 
const app = express()


import ConnectionToDB from "./db/db_connection"

app.use(express.json())             //essential when working with JSON payloads in requests, especially for POST and DELETE methods.

//routes
import userRoute from "./routes/userRoutes"
import contentRoute from "./routes/contentRoutes"
import { error } from "console"

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
