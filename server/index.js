require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getPhotos, postPhoto, postContact } from './api';

const PORT = process.env.PORT;

const corsOptions = { origin: '*', optionsSuccessStatus: 200 };

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

// PHOTOS
app.get('/photos', getPhotos);

app.post('/photo', postPhoto);

// CONTACTS
app.post('/contact', postContact);

app.listen(PORT, 'localhost', (err) => {
  if (err) console.log(err);
  console.log(`Server running on http://localhost:${PORT}/.`);
});
