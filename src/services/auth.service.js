import { comparePassword, generateToken, hashToken } from "../utils/crypto.utility.js";
import User from "../models/user.model.js";
import Session from "../models/session.model.js";

export async function authenticate(email, password) {
    try {
        const user = await User.findUserByEmail(email);

        if (!user) return null;

        const isMatch = await comparePassword(password, user.password_hash);

        if (!isMatch) return null;

        return user;

    } catch (err) {
        console.error(err);
    }
}

export async function authorize(user) {
    try {
        const sessionToken = generateToken();
        const hashedToken = hashToken(sessionToken);

        await Session.createSession({
            hashedToken: hashedToken,
            userId: user.userId,
            ipAddress: user.ipAddress,
            userAgent: user.userAgent
        });

        return sessionToken;

    } catch (err) {
        console.error(err);
    }
}

export async function checkAuthorization(sessionToken) {
    try {
        if (!sessionToken) return false;

        const hashedToken = hashToken(sessionToken);

        const session = await Session.findSessionByToken(hashedToken);
        
    } catch (err) {
        console.error(err);
    }
}