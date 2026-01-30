import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import express from 'express';
import dotenv from 'dotenv';
import clientRouter from './routes/client.js';
import bodyparser from 'body-parser';
const app = express();
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
// Serve uploads directory so uploaded files are accessible via /uploads/<filename>
app.use('/uploads', express.static('uploads'));
const port = process.env.PORT;

mongoose.connect("mongodb://localhost:27017").then(() => {
  app.listen(port, () => {
    console.log(` its connect on port ${port} `);

  });
}).catch(err => {
  console.log(`${err} not connect`);
});
app.use("/User", clientRouter);




