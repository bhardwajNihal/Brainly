"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const db_connection_1 = __importDefault(require("./db/db_connection"));
app.use(express_1.default.json()); //essential when working with JSON payloads in requests, especially for POST and DELETE methods.
//routes
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const contentRoutes_1 = __importDefault(require("./routes/contentRoutes"));
app.use("/api/v1/user", userRoutes_1.default);
app.use("/api/v1/content", contentRoutes_1.default);
(0, db_connection_1.default)()
    .then(() => app.listen(3000, () => {
    console.log("server listening at port 3000!");
})).catch((error) => {
    console.log("DB connection failed!", error);
});
