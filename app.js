import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";

import pageNavigationRouter from "./src/routes/page.navigation.routes.js";
import loginRouter from "./src/routes/login.routes.js";
import signupRouter from "./src/routes/signup.routes.js";
import apiRouter from "./src/routes/api.routes.js";

const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;

// Third-party Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// Routers
app.use(pageNavigationRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/api", apiRouter);

// Fallback
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "src", "views", "404.html")
    );
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`);
});