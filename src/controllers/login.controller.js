import path from "node:path";
import { checkLoginData } from "../services/form.service.js";
import { authenticate, authorize } from "../services/auth.service.js";

const __dirname = import.meta.dirname;

export function serveLoginPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "website", "login.html")
    );
}

export async function log(req, res) {
    const email = req.body.email.trim();
    const password = req.body.password.trim();
    
    try {
        const isValid = checkLoginData({
            email: email,
            password: password
        });

        if (!isValid) {
            return res.status(400).json({
                error: "Form data sent incorrectly."
            });
        }

        const user = await authenticate(email, password);

        if (!user) {
            return res.status(401).json({
                error: "Invalid email or password."
            });
        }
        
        const sessionToken = await authorize({
            userId: user.id,
            ipAddress: req.ip,
            userAgent: req.headers["user-agent"]
        });

        res.cookie("session_token", sessionToken, {
            httpOnly: true,
            sameSite: "Strict"
        });

        res.redirect("/");

    } catch (err) {
        console.error(err);
    }
}