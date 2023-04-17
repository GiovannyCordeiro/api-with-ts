import { Model, DataType } from "sequelize-typescript";
import database from "src/database";

class Customer extends Model{
  declare id:number;
  declare first_name: string;
  declare last_name:string;
  declare CPF:number;
}

Customer.init({
  id:{
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name:{
    type: DataType.STRING
  },
  last_name:{
    type:DataType.STRING
  },
  CPF:{
    type: DataType.INTEGER
  }
}, {sequelize: database})

export default Customer;