import { getConnection } from '../db.js';
import bcrypt from 'bcryptjs';

async function hashpassword(password) {
    const salt = 10;
    return await bcrypt.hash(password, salt);
}

export const addUser = async (req, res) => {
    let conn;
    try {
        const { FullName, email, password, phoneNumber } = req.body;
        const passwordHashing = await hashpassword(password);
        const payload = { FullName, email, password: passwordHashing, phoneNumber };

        conn = await getConnection();
        await conn.execute('INSERT INTO users (id, data) VALUES (?, ?) ', [
            `user_${Date.now()}`,
            JSON.stringify(payload),
        ]);

        res.json({ message: 'تم' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    } finally {
        if (conn) await conn.end();
    }
};

