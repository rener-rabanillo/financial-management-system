import express from "express";
import * as accountsController from "../controllers/accounts.controller.js";

const router = express.Router();

router.get("/", accountsController.serveAccountsPage);

export default router;