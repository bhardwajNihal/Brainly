import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    title: String
})

export const Tag = mongoose.model("Tag", tagSchema);