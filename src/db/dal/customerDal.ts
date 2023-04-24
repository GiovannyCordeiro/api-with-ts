import Customer, { customerInput, customerOutput } from "../models/customer";

async function getCustomer(id:number): Promise<customerOutput>{
  // return new Promise( async (resolve, reject) => {
  //   const result = await Customer.findByPk(id)
  //   return resolve(result);
  // });
  const customer = await Customer.findByPk(id);
  if(!customer){
    throw new Error('Not found');
  }
  return customer;
}

async function getCustomers(): Promise<customerOutput[]>{
  // return new Promise( async (resolve, reject) => {
  //   const result = await Customer.findAll()
  //   return resolve(result);
  // });
  const customer = await Customer.findAll();
  if(!customer){
    throw new Error ('Not found');
  }
  return customer;
}

async function addCustomer(customer: customerInput): Promise<customerOutput>{
  // return new Promise(async (resolve, reject) => {
  //   if (!customer.first_name || !customer.CPF){
  //     return reject(new Error(`Invalid customer.`));
  //   }
  //   const newCustomer = await Customer.create({
  //     id: customer.id,
  //     first_name: customer.first_name,
  //     last_name: customer.last_name,
  //     CPF: customer.CPF
  //   });
  //   return resolve(newCustomer);
  // })

  const newCustomer = await Customer.create(customer);
  return newCustomer;
} 

async function updateCustomer(id: number, newCustomer: customerInput): Promise<customerOutput | any > {
    // return new Promise(async (resolve, reject) => {
    //   try{
    //     const result = await Customer.update({
    //       id: id,
    //       first_name: newCustomer.first_name,
    //       last_name: newCustomer.last_name,
    //       CPF: newCustomer.CPF
    //     },{
    //       where: {id: id}
    //     })
    //     return resolve(result);
    //   }
    //   catch (e:any) {
    //     reject(e);
    //   }
    // });

    const updatedCustomer = await Customer.update(newCustomer, {where: {id:id}})
    return updatedCustomer;
}

async function deleteCustomer(id: number): Promise<boolean> {
  // return new Promise(async (resolve, reject) => {
  //   await Customer.destroy({
  //     where: {
  //       id: id
  //     }
  //   });
  //   return resolve(true);
  // })
  const delCustomer = await Customer.destroy({where: {id:id}});
  return !!delCustomer;
}

export default {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer
}