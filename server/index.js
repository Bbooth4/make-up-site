import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { home } from './src';

const PORT = 9001;

const corsOptions = { origin: '*', optionsSuccessStatus: 200 };

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/test', home);

app.listen(PORT, 'localhost', (err) => {
  if (err) console.log(err);
  console.log(`Server running on http://localhost:${PORT}/.`);
});
