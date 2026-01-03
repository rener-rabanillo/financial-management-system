import { checkTextLength, checkName, checkEmail, checkPassword } from "../utils/form.utility.js";
import User from "../models/user.model.js";

export function checkLoginData(data) {
    return (
        checkEmail(data.email) &&
        checkPassword(data.password)
    );
}

export function checkSignupData(data) {
    return (
        checkName(data.firstName) &&
        checkName(data.lastName) &&
        checkTextLength(data.firstName) &&
        checkTextLength(data.lastName) &&
        checkEmail(data.email) &&
        checkPassword(data.password) &&
        data.password === data.confirmPassword
    );
}

export async function checkDuplicateEmail(email) {
    try {
        const user = await User.findUserByEmail(email);

        if (!user) return false;

        return true;

    } catch (error) {
        throw error;
    }
}