import express from 'express';
import customerController from '../controllers/customerController';

const customerRouter = express.Router();

customerRouter.get('/:id', customerController.getCustomer);

customerRouter.get('/', customerController.getCustomers);

customerRouter.post('/', customerController.postCustomer);

customerRouter.patch('/:id', customerController.patchCustomer);

customerRouter.delete('/:id', customerController.deleteCustomer);

export default customerRouter;