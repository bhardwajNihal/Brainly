import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname : {type: String, required:true},
    lastname : {type: String},
    email : {type: String, unique: true, required:true},
    password: {type: String, required:true}
})

export const User = mongoose.model("User", userSchema)