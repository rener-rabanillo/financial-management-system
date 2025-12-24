import { generateUuid, uuidToBinary, hashPassword } from "../utils/crypto.utility.js";
import User from "../models/user.model.js";

export async function createUser(user) {
    try {
        const id = uuidToBinary(generateUuid());
        const hashedPassword = await hashPassword(user.password);

        await User.createUser({
            id: id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            hashedPassword: hashedPassword
        });

        return id;

    } catch (err) {
        console.error(err);
    }
}