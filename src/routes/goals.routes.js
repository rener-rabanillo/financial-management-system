import express from "express";
import * as goalsController from "../controllers/goals.controller.js";

const router = express.Router();

router.get("/", goalsController.getAll);

router.get("/:id", goalsController.getExisting);

router.post("/", goalsController.create);

router.put("/", goalsController.modify);

router.delete("/", goalsController.remove);

export default router;