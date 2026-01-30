import { getConnection } from '../db.js';

export const cardData = async (req, res) => {
    let conn;
    try {
        conn = await getConnection();
        const [rows] = await conn.execute('SELECT data FROM products');
        const data = rows.map(r => JSON.parse(r.data));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        if (conn) await conn.end();
    }
};
