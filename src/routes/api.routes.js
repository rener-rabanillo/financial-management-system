import express from "express";
import budgetsRouter from "./budgets.routes.js";
import transactionsRouter from "./transactions.routes.js";
import goalsRouter from "./goals.routes.js";
import accountsRouter from "./accounts.routes.js";

const router = express.Router();

router.use("/budgets", budgetsRouter);

router.use("/transactions", transactionsRouter);

router.use("/goals", goalsRouter);

router.use("/accounts", accountsRouter);

export default router;