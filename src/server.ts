import dotenv from 'dotenv';
dotenv.config();

const PORT = parseInt(`${process.env.PORT || 3000}`);

import app from './app';
import database from './database';

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}.`)
  database.authenticate()
    .then(async() => {
      console.log("db connected")
    })
    .catch((e:any) => {
      console.log(e.message);
    });
});