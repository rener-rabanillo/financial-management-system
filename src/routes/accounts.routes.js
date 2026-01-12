import express from "express";
import * as accountsController from "../controllers/accounts.controller.js";

const router = express.Router();

router.get("/", accountsController.getAll);

router.get("/:id", accountsController.getExisting);

router.post("/", accountsController.create);

router.put("/", accountsController.modify);

router.delete("/", accountsController.remove);

export default router;