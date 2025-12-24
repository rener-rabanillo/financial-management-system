import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";

import staticPageRouter from "./src/routes/static.page.routes.js";
import loginRouter from "./src/routes/login.routes.js";
import signupRouter from "./src/routes/signup.routes.js";
import budgetRouter from "./src/routes/budget.routes.js";
import transactionsRouter from "./src/routes/transactions.routes.js";
import accountsRouter from "./src/routes/accounts.routes.js";

const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// Routers
app.use(staticPageRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/budget", budgetRouter);
app.use("/transactions", transactionsRouter);
app.use("/accounts", accountsRouter);

// Fallback
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "src", "views", "404.html")
    );
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`);
});