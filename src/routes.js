
import { Router } from 'express'
import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController.js'

const routes = new Router()

//configuração de rota 
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

//return res.status(200).json({ message: 'API is running' })



export default routes; 