import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getConnection } from './db.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
import {
  dataAffiliateStat,
  dataOverallStat,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataUser,
} from './data/index.js';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

// ensure MySQL tables used by endpoints exist
async function initDb() {
  const conn = await getConnection();
  try {
    await conn.execute(`CREATE TABLE IF NOT EXISTS vehicle (id INT AUTO_INCREMENT PRIMARY KEY, data JSON)`);
    await conn.execute(`CREATE TABLE IF NOT EXISTS car (id INT AUTO_INCREMENT PRIMARY KEY, data JSON)`);
    console.log('MySQL tables ensured');
  } finally {
    await conn.end();
  }
}

initDb().catch((err) => console.error('DB init error', err));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.use(express.json());

app.use(cors());

// Using MySQL tables `vehicle` and `car` to store JSON data

app.get("/server", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    const [vehiclesRows] = await conn.query('SELECT data FROM vehicle');
    const [carsRows] = await conn.query('SELECT data FROM car');
    const vehicles = vehiclesRows.map(r => JSON.parse(r.data));
    const cars = carsRows.map(r => JSON.parse(r.data));
    res.json({ vehicles, cars });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting form data!");
  } finally {
    if (conn) await conn.end();
  }
});

app.post("/server", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    const payload = JSON.stringify(req.body);
    await conn.execute('INSERT INTO vehicle (data) VALUES (?)', [payload]);
    console.log("Form data saved successfully!");
    res.status(201).send('Saved');
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving form data!");
  } finally {
    if (conn) await conn.end();
  }
});

// return full dataset exports for client-side consumption or seeding
app.get("/data", (req, res) => {
  try {
    const fullData = {
      users: dataUser,
      products: dataProduct,
      productStats: dataProductStat,
      transactions: dataTransaction,
      affiliateStats: dataAffiliateStat,
      overallStats: dataOverallStat,
    };
    res.json(fullData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving data exports");
  }
});

// create payment intent for Stripe
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd', metadata } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('create-payment-intent error', err);
    res.status(500).json({ error: 'Internal error creating payment intent' });
  }
});

app.listen(PORT, () => {
  console.log("Server started on port 3001");
});
