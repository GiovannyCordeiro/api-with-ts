import { Sequelize, Model, Column } from "sequelize-typescript";

const database = new Sequelize({
  database: 'crud',
  dialect: 'mysql',
  username: 'root',
  password: 'gio434445',
  host: 'localhost',
  port: 3306
})

export default database; 