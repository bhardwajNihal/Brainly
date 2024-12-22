
import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    hash: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique:true},
    share: {type: Boolean, default:false}
})

export const Sharelink = mongoose.model("Sharelink", linkSchema);