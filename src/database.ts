import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';

dotenv.config();

const nameDB = `${process.env.NAMEDB}`;
const dialect = `${process.env.NAMEDB}`;
const username = `${process.env.NAMEDB}`;
const password = `${process.env.NAMEDB}`;
const host = `${process.env.NAMEDB}`;
const port = `${process.env.NAMEDB}`;

const database = new Sequelize({
  database: 'crud',
  dialect: 'mysql',
  username: 'root',
  password: 'gio434445',
  host: 'localhost',
  port: 3306
})

export default database; 