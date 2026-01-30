import bcrypt from 'bcryptjs';
import { getConnection } from '../db.js';

async function findUserByEmail(email) {
    const conn = await getConnection();
    try {
        const [rows] = await conn.execute('SELECT data FROM users');
        for (const r of rows) {
            const user = JSON.parse(r.data);
            if (user.email === email) return user;
        }
        return null;
    } finally {
        await conn.end();
    }
}

async function login(email, password) {
    const user = await findUserByEmail(email);
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) return user;
        throw Error('password err');
    }
    throw Error('email error');
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await login(email, password);
        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: error.message });
    }
};