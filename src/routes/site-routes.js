const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "website", "index.html"));
});

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "website", "about.html"));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "website", "contact.html"));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "website", "login.html"));
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "website", "signup.html"));
});

module.exports = router;