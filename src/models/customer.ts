import { Model, Table, Column, PrimaryKey, AutoIncrement} from "sequelize-typescript";
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