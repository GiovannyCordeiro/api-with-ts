import { Model, DataType, Table, Column, PrimaryKey, AutoIncrement} from "sequelize-typescript";
import database from "../database";

// interface CustomerAttributes{
//   id: number;
//   first_name: string;
//   last_name: string;
//   CPF: number;
// }
// class Customer extends Model<CustomerAttributes> implements CustomerAttributes{
//   public id!:number;
//   public first_name!: string;
//   public last_name!:string;
//   public CPF!:number;
// }

// Customer.init({
//   id:{
//     type: DataType.INTEGER.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   first_name:{
//     type: DataType.STRING(50)
//   },
//   last_name:{
//     type:DataType.STRING(50)
//   },
//   CPF:{
//     type: DataType.INTEGER,
//     unique:true
//   }
// }, {tableName: 'people', sequelize: database}
// );

@Table
class Customer extends Model{
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: Number;

  @Column
  first_name!: String;

  @Column
  last_name!: String;

  @Column
  CPF!: Number;
}


export default Customer;