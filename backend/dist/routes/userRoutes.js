"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const userModel_1 = require("../models/userModel");
const zod_1 = __importDefault(require("zod"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const userRoute = (0, express_2.Router)();
app.use(express_1.default.json());
userRoute.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 1. Input validation
    const validInput = zod_1.default.object({
        firstname: zod_1.default.string().min(2).max(100),
        lastname: zod_1.default.string().min(2).max(100),
        email: zod_1.default.string().email().max(100),
        password: zod_1.default.string()
            .min(6, "Password must be at least 6 characters long")
            .max(100)
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[\W_]/, "Password must contain at least one special character")
    });
    const validateInputData = validInput.safeParse(req.body);
    // if input validation failed
    if (!validateInputData.success) {
        res.status(411).json({
            message: "Invalid Inputs!",
            error: validateInputData.error.errors
        });
        return;
    }
    // if input successfully validated
    const { firstname, lastname, email, password } = req.body;
    //checking if user already exists
    const findUser = yield userModel_1.User.findOne({ email: email });
    if (findUser) {
        res.status(403).json({
            message: "user already exists!"
        });
        return;
    }
    // finally - hash password and save the data in the db
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    yield userModel_1.User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword
    });
    res.status(200).json({
        message: "user signed up successfully!"
    });
}));
userRoute.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const findUser = yield userModel_1.User.findOne({
        email: email
    });
    if (!findUser) {
        res.status(403).json({
            message: "user not found!"
        });
        return;
    }
    const checkPassword = yield bcrypt_1.default.compare(password, findUser.password);
    if (!checkPassword) {
        res.status(403).json({
            message: "Wrong Password!"
        });
        return;
    }
    const token = jsonwebtoken_1.default.sign({
        id: findUser._id.toString()
    }, process.env.JWT_SECRET);
    res.status(200).json({
        message: "user logged in successfully!",
        token: token
    });
}));
exports.default = userRoute;
