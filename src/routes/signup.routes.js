import express from "express";
import * as signupController from "../controllers/signup.controller.js";

const router = express.Router();

router.get("/", signupController.serveSignupPage);

router.post("/", signupController.register);

export default router;