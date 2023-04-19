import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
import Customer from "./models/customer";

dotenv.config();

const nameDB = `${process.env.NAMEDB}`;
const username = `${process.env.USERNAMEDB}`;
const password = `${process.env.PASSWORDDB}`;
const host = `${process.env.HOSTDB}`;
const port = `${process.env.PORTDB}`;


const database = new Sequelize({
  database: nameDB,
  dialect: 'mysql',
  username: username,
  password: password,
  host: host,
  port: parseInt(port),
})

database.addModels([Customer]);

export default database; 