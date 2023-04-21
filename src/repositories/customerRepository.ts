import Customer from "../models/customer";

async function getCustomer(id:number): Promise<Customer | null>{
  return new Promise( async (resolve, reject) => {
    const result = await Customer.findByPk(id)
    return resolve(result);
  });
}

async function getCustomers(): Promise<Customer[]>{
  return new Promise( async (resolve, reject) => {
    const result = await Customer.findAll()
    return resolve(result);
  });
}

async function addCustomer(customer : Customer): Promise<Customer>{
  return new Promise(async (resolve, reject) => {
    if (!customer.first_name || !customer.CPF){
      return reject(new Error(`Invalid customer.`));
    }
    const newCustomer = await Customer.create({
      id: customer.id,
      first_name: customer.first_name,
      last_name: customer.last_name,
      CPF: customer.CPF
    });
    return resolve(newCustomer);
  })
} 

async function updateCustomer(id: number, newCustomer: Customer): Promise<Customer | any > {
    return new Promise(async (resolve, reject) => {
      try{
        const result = await Customer.update({
          id: id,
          first_name: newCustomer.first_name,
          last_name: newCustomer.last_name,
          CPF: newCustomer.CPF
        },{
          where: {id: id}
        })
        return resolve(result);
      }
      catch (e:any) {
        reject(e);
      }
    });
}

async function deleteCustomer(id: number): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    await Customer.destroy({
      where: {
        id: id
      }
    });
    return resolve(true);
  })
}

export default {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer
}