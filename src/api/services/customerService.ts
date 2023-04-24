// pegar o customerInput e customerOutput para tipar o services melhor
import { customerInput, customerOutput } from "../../db/models/customer"
import customerDal from "../../db/dal/customerDal";

const getCustomer = async (id:number): Promise<customerOutput>=> {
  return customerDal.getCustomer(id);
};

const getCustomers = async ():Promise<customerOutput[]> => { 
  return await customerDal.getCustomers();
};

const createCustomer = async (dataCustomer:customerInput): Promise<customerOutput> => {
  // preciso criar uma dal para criar de fato um customer
  // return await customerDal.(dataCustomer);
  return customerDal.addCustomer(dataCustomer);
};

// mudar para customer input o segundo parametro
const patchCustomer = async (id:number, customer:customerInput): Promise<customerOutput> => {
  return await customerDal.updateCustomer(id, customer);
};

const deleteCustomer = async (id:number):Promise<boolean> => {
  return await customerDal.deleteCustomer(id);
}

const updateCustomer = async (id:number, customer:customerInput): Promise<customerOutput> => {
  return await customerDal.updateCustomer(id, customer);
}

export default {
  getCustomer,
  getCustomers,
  createCustomer,
  patchCustomer,
  deleteCustomer,
  updateCustomer
}