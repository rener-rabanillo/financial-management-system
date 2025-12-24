import express from "express";
import * as staticPageController from "../controllers/static.page.controller.js";

const router = express.Router();

router.get("/", staticPageController.serveHomePage);

router.get("/about", staticPageController.serveAboutPage);

router.get("/contact", staticPageController.serveContactPage);

export default router;