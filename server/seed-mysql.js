import dotenv from 'dotenv';
dotenv.config();

import { getConnection } from './db.js';
import {
  dataAffiliateStat,
  dataOverallStat,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataUser,
} from './data/index.js';

function getId(doc, idx) {
  if (doc && (doc._id || doc.id)) return String(doc._id || doc.id);
  return `gen_${Date.now()}_${idx}`;
}

async function ensureTables(conn) {
  await conn.execute(`CREATE TABLE IF NOT EXISTS users (id VARCHAR(200) PRIMARY KEY, data JSON)`);
  await conn.execute(`CREATE TABLE IF NOT EXISTS products (id VARCHAR(200) PRIMARY KEY, data JSON)`);
  await conn.execute(`CREATE TABLE IF NOT EXISTS product_stats (id VARCHAR(200) PRIMARY KEY, data JSON)`);
  await conn.execute(`CREATE TABLE IF NOT EXISTS transactions (id VARCHAR(200) PRIMARY KEY, data JSON)`);
  await conn.execute(`CREATE TABLE IF NOT EXISTS affiliate_stats (id VARCHAR(200) PRIMARY KEY, data JSON)`);
  await conn.execute(`CREATE TABLE IF NOT EXISTS overall_stats (id VARCHAR(200) PRIMARY KEY, data JSON)`);
}

async function insertDataset(conn, table, docs) {
  if (!Array.isArray(docs) || docs.length === 0) {
    console.log(`No documents for ${table}`);
    return;
  }

  const sql = `INSERT INTO ${table} (id, data) VALUES ? ON DUPLICATE KEY UPDATE data = VALUES(data)`;
  const values = docs.map((doc, idx) => [getId(doc, idx), JSON.stringify(doc)]);
  await conn.query(sql, [values]);
  console.log(`Inserted ${docs.length} rows into ${table}`);
}

async function run() {
  const conn = await getConnection();
  try {
    console.log('Connected to MySQL, ensuring tables...');
    await ensureTables(conn);

    await insertDataset(conn, 'users', dataUser);
    await insertDataset(conn, 'products', dataProduct);
    await insertDataset(conn, 'product_stats', dataProductStat);
    await insertDataset(conn, 'transactions', dataTransaction);
    await insertDataset(conn, 'affiliate_stats', dataAffiliateStat);
    await insertDataset(conn, 'overall_stats', dataOverallStat);

    console.log('MySQL seeding complete');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await conn.end();
  }
}

run();
