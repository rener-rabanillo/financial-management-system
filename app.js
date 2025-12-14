const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const siteRouter = require("./src/routes/site-routes");

dotenv.config();

const app = express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routers
app.use(siteRouter);

// Fallback
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "src", "views", "404.html"));
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});