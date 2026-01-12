import pool from "../db/pool.js";

export default class Session {
    static async createSession(session) {
        try {
            await pool.execute(
                "CALL `create_session` (?, ?, ?)",
                [session.userId, session.hashedToken]
            );

        } catch (error) {
            throw error;
        }
    }

    static async findSessionByToken(hashedToken) {
        try {
            const [result] = await pool.execute(
                "SELECT * FROM `session` WHERE `token_hash` = ? LIMIT 1",
                [hashedToken]
            );

            return result[0];

        } catch (error) {
            throw error;
        }
    }
}