import { Request, Response, NextFunction } from 'express';
// import Customer from '../db/models/customer';
// import customerRepository from '../repositories/customerRepository';

import customerService from '../services/customerService';

async function getCustomer(req: Request, res:Response, next:NextFunction){
  const id = req.params.id;

  const customer = await customerService.getCustomer(parseInt(id));

  if(customer){
    res.json(customer);
  }
  else{
    res.sendStatus(404);
  }
}

async function getCustomers(req: Request, res: Response, next: NextFunction){

  const customers = await customerService.getCustomers();

  res.json(customers);
}

async function postCustomer(req: Request, res: Response, next: NextFunction) {
  try{
    const { first_name, last_name, CPF} = req.body.body;

    //estou acessando direto o model nao repository como deveria
    const customer = await customerService.createCustomer({
      first_name: first_name,
      last_name: last_name,
      CPF: CPF
    })

    res.status(201).json(customer);
  }
  catch(e){
    res.json(
      {
        "status": 404, 
        "body": "Erro funcao post Customer"
      });
  }
}

async function patchCustomer(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const customer = req.body;
  try{

    const result = await customerService.updateCustomer(parseInt(id), customer.body);
    
    res.json(result);
  } catch (e:any) {
    res.sendStatus(404).json(e);
  }
}

async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  
  const success = await customerService.deleteCustomer(parseInt(id));
  
  if (success)
      res.sendStatus(204);
  else
      res.sendStatus(404);
}

export default {
  getCustomer,
  getCustomers,
  postCustomer,
  patchCustomer,
  deleteCustomer
}