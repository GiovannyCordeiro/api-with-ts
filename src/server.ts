import dotenv from 'dotenv';
dotenv.config();

const PORT = parseInt(`${process.env.PORT || 3000}`);

import app from './api/app';
import dbInit from './db/init';

try{
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}.`)
    dbInit();
  });
} catch (error:any) {
  console.log(`Error ocurred in server: ${error}`);
}