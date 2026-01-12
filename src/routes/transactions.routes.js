import express from "express";
import * as transactionsController from "../controllers/transactions.controller.js";

const router = express.Router();

router.get("/", transactionsController.getAll);

router.get("/:id", transactionsController.getExisting);

router.post("/", transactionsController.create);

router.put("/", transactionsController.modify);

router.delete("/", transactionsController.remove);

export default router;