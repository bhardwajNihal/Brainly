import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({

    title: {type:String, required: true},
    link: String,
    type: {type:String, enum:["Document","Tweet","Youtube","Link"]},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: "Tag"}],
    userId:  {type: mongoose.Schema.Types.ObjectId, ref: "User"}

})

export const Content = mongoose.model("Content", contentSchema)