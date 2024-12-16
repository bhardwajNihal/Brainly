"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contentSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    link: String,
    type: { type: String, enum: ["Image", "Video", "Audio", "Article"] },
    tags: { type: [mongoose_1.default.Schema.Types.ObjectId], ref: "Tag" },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }
});
exports.Content = mongoose_1.default.model("Content", contentSchema);
