
import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer.js'

import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController.js'
import ProductController from './app/controllers/ProductController.js'

const routes = new Router();

const upload = multer(multerConfig);

//configuração de rota 
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.post('/products', upload.single('file'), ProductController.store);

//return res.status(200).json({ message: 'API is running' })



export default routes; 