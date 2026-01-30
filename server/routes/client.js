import express from "express";
import { addUser } from "../controller/addUser.js";
import { loginUser } from "../controller/loginUser.js";
// import { addProdect } from "../controller/addProdect.js";
import multer from 'multer';
const router = express.Router();

import Image from '../models/Prodect.js'

// router.get('/sign',addUser)



import path from 'path';
import { cardData } from "../controller/cardData.js";

// Set up storage using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// // Route to upload an image
router.post('/ProdectNew', upload.single('image'), async (req, res) => {
  console.log(req.file.filename)
  const { nameProdect, price } = req.body;
  console.log(nameProdect);
  console.log(price);
  try {
    const newImage = new Image({ nameProdect, price, filename: req.file.filename });
    await newImage.save();
    res.status(201).json({ message: 'Image uploaded and saved to database' });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading image' });
  }
});







router.post('/login', loginUser);
router.post('/sign', addUser)
// router.post('/ProdectNew',upload.single('image'),addProdect)
router.get('/ProdectGetAll', cardData);


export default router;