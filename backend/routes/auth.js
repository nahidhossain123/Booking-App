import express from "express";
import { register } from "../Controller/authController.js";
const route = express.Router();

route.post("/", register);

export default route;
