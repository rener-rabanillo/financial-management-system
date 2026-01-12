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

    } catch (error) {
        throw error;
    }
}

export async function authorize(userId) {
    try {
        const token = generateToken();
        const hashedToken = hashToken(token);

        await Session.createSession({
            userId: userId,
            hashedToken: hashedToken
        });

        return token;

    } catch (error) {
        throw error;
    }
}

export async function checkAuthorization(sessionToken) {
    try {
        if (!sessionToken) return false;

        const hashedToken = hashToken(sessionToken);

        const session = await Session.findSessionByToken(hashedToken);
        
    } catch (error) {
        throw error;
    }
}