import path from "node:path";
import { checkSignupData, checkDuplicateEmail } from "../services/form.service.js";
import { createUser } from "../services/user.service.js";
import { authorize } from "../services/auth.service.js";

const __dirname = import.meta.dirname;

export function serveSignupPage(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "views", "website", "signup.html")
    );
}

export async function register(req, res) {
    const firstName = req.body.firstName.trim();
    const lastName = req.body.lastName.trim();
    const email = req.body.email.trim();
    const password = req.body.password.trim();
    const confirmPassword = req.body.confirmPassword.trim();

    try {
        const isValid = checkSignupData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });

        if (!isValid) {
            return res.status(400).json({
                error: "Form data sent incorrectly."
            });
        }
        
        const isFound = await checkDuplicateEmail(email);

        if (isFound) {
            return res.status(400).json({
                error: "Email already exists."
            });
        }

        const userId = await createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        
        const sessionToken = await authorize({
            userId: userId,
            ipAddress: req.ip,
            userAgent: req.headers["user-agent"]
        });

        res.cookie("session_token", sessionToken, {
            httpOnly: true,
            sameSite: "Strict"
        });

        res.redirect("/");

    } catch (err) {
        console.log(err);
    }
}