import express from "express";

import { login, register } from "../Controller/authController.js";
import upload from "../middlewares/uploadFile.js";
const route = express.Router();

route.post("/register", upload.single("image"), register);
route.post("/login", login);

export default route;
