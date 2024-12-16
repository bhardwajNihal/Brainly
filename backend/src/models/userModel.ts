import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname : {type: String},
    lastname : {type: String},
    email : {type: String, unique: true},
    password: {type: String}
})

export const User = mongoose.model("User", userSchema)