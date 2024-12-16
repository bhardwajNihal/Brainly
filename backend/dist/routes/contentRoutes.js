"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const express_2 = require("express");
const contentRoute = (0, express_2.Router)();
app.use(express_1.default.json());
// add content route
contentRoute.post("/", (req, res) => {
    res.send("content added");
});
// delete content
contentRoute.delete("/", (req, res) => {
    res.send("content deleted");
});
// preview all content
contentRoute.get("/", (req, res) => {
    res.send("list of content");
});
exports.default = contentRoute;
