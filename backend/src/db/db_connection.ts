import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export default async function ConnectionToDB(){
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);    //Type assertion allows us to override TypeScript's type checking.It tells the TypeScript compiler, "Trust me, I know this variable is of type string."
        console.log("Database connected succefully!");
        
        
    } catch (error) {
        console.log("Database connection failed!\nError: ",error);
        process.exit(1);                //better to exit application when the error is critical
    }
}
