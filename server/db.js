import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  host: process.env.MYSQL_HOST || '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'prymun',
  port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
};

export async function getConnection() {
  const conn = await mysql.createConnection(config);
  return conn;
}

export default { getConnection };
