import express from "express";
import * as pageNavigationController from "../controllers/page.navigation.controller.js";

const router = express.Router();

router.get("/", pageNavigationController.serveHomePage);

router.get("/about", pageNavigationController.serveAboutPage);

router.get("/contact", pageNavigationController.serveContactPage);

router.get("/login", pageNavigationController.serveLoginPage);

router.get("/signup", pageNavigationController.serveSignupPage);

router.get("/budgets", pageNavigationController.serveBudgetPage);

router.get("/transactions", pageNavigationController.serveTransactionsPage);

router.get("/goals", pageNavigationController.serveGoalsPage);

router.get("/accounts", pageNavigationController.serveAccountsPage);

router.get("/search", pageNavigationController.serveResultsPage);

export default router;