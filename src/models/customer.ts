import { Model, DataType} from "sequelize-typescript";
import database from "../database";

interface CustomerAttributes{
  id: number;
  first_name: string;
  last_name: string;
  CPF: number;
}
class Customer extends Model<CustomerAttributes> implements CustomerAttributes{
  public id!:number;
  public first_name!: string;
  public last_name!:string;
  public CPF!:number;
}

Customer.init({
  id:{
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  first_name:{
    type: DataType.STRING(50)
  },
  last_name:{
    type:DataType.STRING(50)
  },
  CPF:{
    type: DataType.INTEGER,
    unique:true
  }
}, {tableName: 'crud', sequelize:database})


export default Customer;