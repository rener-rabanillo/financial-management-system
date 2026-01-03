import { checkLoginData } from "../services/form.service.js";
import { authenticate, authorize } from "../services/auth.service.js";

export async function log(req, res) {
    const email = req.body.email.trim();
    const password = req.body.password;
    
    try {
        const isValid = checkLoginData({
            email: email,
            password: password
        });

        if (!isValid) {
            return res.status(400).json({
                status: 400,
                message: "Invalid format."
            });
        }

        const user = await authenticate(email, password);

        if (!user) {
            return res.status(401).json({
                status: 401,
                message: "Invalid email or password."
            });
        }
        
        const token = await authorize({
            userId: user.id,
            ipAddress: req.ip,
            userAgent: req.headers["user-agent"]
        });

        res.cookie("sid", token, {
            httpOnly: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            status: 200,
            message: "Login successful."
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: 500,
            message: "An error occured in the server."
        });
    }
}