import database from "./config";

const dbInit = () => { 
  database.sync() 
};

export default dbInit;