import express from "express";
import * as budgetController from "../controllers/budget.controller.js";

const router = express.Router();

router.get("/", budgetController.serveBudgetPage);

export default router;