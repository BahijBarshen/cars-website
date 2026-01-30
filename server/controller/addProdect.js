import { getConnection } from '../db.js';

export const addProdect = async (req, res) => {
    try {
        console.log(req.file.filename);
        const { nameProdect, price } = req.body;
        const payload = { nameProdect, price, filename: req.file.filename };
        const conn = await getConnection();
        await conn.execute('INSERT INTO products (id, data) VALUES (?, ?)', [
            `prod_${Date.now()}`,
            JSON.stringify(payload),
        ]);
        await conn.end();
        res.status(201).json({ message: 'Image uploaded and saved to database' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error uploading image' });
    }
};

