import Customer from "../models/customer";

// funcao que basicamente pega o item de acorod com seu id e faz retornar uma promise com
// um dado type customer ou null, antes era customer ou undefined.
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

async function updateCustomer(id: number, newCustomer: Customer): Promise<Customer | undefined> {
    return new Promise(async (resolve, reject) => {
      await Customer.update({
        id: id,
        first_name: newCustomer.first_name,
        last_name: newCustomer.last_name,
        CPF: newCustomer.CPF
      },{
        where: {id: id}
      })
    });
}

async function deleteCustomer(id: number): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      await Customer.destroy({
        where: {
          id: id
        }
      });
    })
}

export default {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer
}