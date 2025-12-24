import express from "express";
import * as transactionsController from "../controllers/transactions.controller.js";

const router = express.Router();

router.get("/", transactionsController.serveTransactionsPage);

export default router;