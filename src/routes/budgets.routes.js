import express from "express";
import * as budgetsController from "../controllers/budgets.controller.js";

const router = express.Router();


router.get("/g/:id", budgetsController.getExistingGroup);

router.post("/g", budgetsController.createGroup);

router.put("/g", budgetsController.modifyGroup);

router.delete("/g", budgetsController.removeGroup);


router.get("/in", budgetsController.getAllInflowCategories);

router.get("/in/:id", budgetsController.getExistingInflowCategory);

router.post("/in", budgetsController.createInflowCategory);

router.put("/in", budgetsController.modifyInflowCategory);

router.delete("/in", budgetsController.removeInflowCategory);


router.get("/out", budgetsController.getAllOutflowCategories);

router.get("/out/:id", budgetsController.getExistingOutflowCategory);

router.post("/out", budgetsController.createOutflowCategory);

router.put("/out", budgetsController.modifyOutflowCategory);

router.delete("/out", budgetsController.removeOutflowCategory);


export default router;