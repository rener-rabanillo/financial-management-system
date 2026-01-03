import pool from "../db/pool.js";
import Session from "./session.model.js";

export default class User {
    static async createUser(user) {
        try {
            await pool.execute(
                "CALL `create_user` (?, ?, ?, ?, ?)",
                [user.id, user.firstName, user.lastName, user.email, user.hashedPassword]
            );

        } catch (error) {
            throw error;
        }
    }

    static async findUsers() {
        try {
            const [results] = await pool.execute(
                "SELECT * FROM `user`"
            );

            return results;

        } catch (error) {
            throw error;
        }
    }

    static async findUserById(id) {
        try {
            const [result] = await pool.execute(
                "SELECT * FROM `user` WHERE `id` = ? LIMIT 1",
                [id]
            );

            return result[0];

        } catch (error) {
            throw error;
        }
    }

    static async findUserByEmail(email) {
        try {
            const [result] = await pool.execute(
                "SELECT * FROM `user` WHERE `email` = ? LIMIT 1",
                [email]
            );

            return result[0];

        } catch (error) {
            throw error;
        }
    }

    static async findUserBySessionToken(hashedToken) {
        try {
            const session = await Session.findSessionByToken(hashedToken);

            const user = await this.findUserById(session.user_id);

            return user;

        } catch (error) {
            throw error;
        }
    }
}