import { Optional } from "sequelize";
import { Model, Table, Column, PrimaryKey, AutoIncrement} from "sequelize-typescript";

interface ICustomer{
  id: number;
  first_name: string;
  last_name: string;
  CPF: number;
}

export interface customerInput extends Optional<ICustomer, 'id'>{};
export interface customerOutput extends Required<ICustomer>{};

@Table
class Customer extends Model<ICustomer, customerInput>{
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  first_name!: string;

  @Column
  last_name!: string;

  @Column
  CPF!: number;
}


export default Customer;