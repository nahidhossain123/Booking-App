import express from "express";

import { login, register } from "../Controller/authController.js";
const route = express.Router();

route.post("/", register);
route.post("/login", login);

export default route;
