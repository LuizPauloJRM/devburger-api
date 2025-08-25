
import { Router } from 'express'
import UserController from './app/controllers/UserController.js'

const routes = new Router()

//configuração de rota 
routes.post('/users', UserController.store);

//return res.status(200).json({ message: 'API is running' })



export default routes;