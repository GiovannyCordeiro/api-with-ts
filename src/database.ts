import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
import Customer from "./models/customer";

dotenv.config();

const nameDB = `${process.env.NAMEDB}`;
const dialect = `${process.env.DIALECTDB}`;
const username = `${process.env.USERNAMEDB}`;
const password = `${process.env.PASSWORDDB}`;
const host = `${process.env.HOSTDB}`;
const port = process.env.PORTDB;


const database = new Sequelize({
  database: 'crud',
  dialect: 'mysql',
  username: 'root',
  password: 'gio434445',
  host: 'localhost',
  port: 3306,
})

database.addModels([Customer]);

export default database; 