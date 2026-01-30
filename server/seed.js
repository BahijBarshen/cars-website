import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
var MONGODB_URI='mongodb+srv://bahejbarshen_db_user:BahijBarshen@prymun.crtkc60.mongodb.net/?appName=Prymun'
import {
  dataAffiliateStat,
  dataOverallStat,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataUser,
} from './data/index.js';

const mongodbConnectionString = MONGODB_URI || 'mongodb://127.0.0.1:27017';

async function run() {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log('Connection string (masked):', mongodbConnectionString.replace(/:[^:]+@/, ':***@'));
    
    await mongoose.connect(mongodbConnectionString, {
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
      socketTimeoutMS: 15000,
      retryWrites: true,
      maxPoolSize: 10,
    });
    console.log('Connected to MongoDB for seeding');

    const datasets = {
      users: dataUser,
      products: dataProduct,
      productStats: dataProductStat,
      transactions: dataTransaction,
      affiliateStats: dataAffiliateStat,
      overallStats: dataOverallStat,
    };

    for (const [collectionName, docs] of Object.entries(datasets)) {
      const schema = new mongoose.Schema({}, { strict: false });
      // use explicit collection name to avoid mongoose pluralization surprises
      const Model = mongoose.model(collectionName, schema, collectionName);

      console.log(`Clearing collection: ${collectionName}`);
      await Model.deleteMany({});

      if (Array.isArray(docs) && docs.length) {
        await Model.insertMany(docs);
        console.log(`Inserted ${docs.length} documents into ${collectionName}`);
      } else {
        console.log(`No documents to insert for ${collectionName}`);
      }
    }

    console.log('Seeding complete');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();
