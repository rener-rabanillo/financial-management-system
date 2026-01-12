import { checkSignupData, checkDuplicateEmail } from "../services/form.service.js";
import { createUser } from "../services/user.service.js";
import { authorize } from "../services/auth.service.js";

export async function register(req, res) {
    const firstName = req.body.firstName.trim();
    const lastName = req.body.lastName.trim();
    const email = req.body.email.trim();
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

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
                error: "Invalid format."
            });
        }
        
        const isFound = await checkDuplicateEmail(email);

        if (isFound) {
            return res.status(409).json({
                error: "Email already exists."
            });
        }

        const userId = await createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        
        const token = await authorize(userId);

        res.cookie("rt", token, {
            httpOnly: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({
            message: "Registration successful."
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}