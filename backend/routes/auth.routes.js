import express from "express"
import { authController } from "../controllers/auth.controller.js";

const authRoute=express.Router();

authRoute.post("/singup",authController.SingupUser);





export default authRoute