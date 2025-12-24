import express from "express";
import * as loginController from "../controllers/login.controller.js";

const router = express.Router();

router.get("/", loginController.serveLoginPage);

router.post("/", loginController.log);

export default router;