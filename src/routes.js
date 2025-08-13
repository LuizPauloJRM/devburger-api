
import { Router } from 'express'
import UserController from './app/controllers/UserController';

const routes = new Router()

//configuração de rota 
routes.post('/users', UserController.store);

export default routes;