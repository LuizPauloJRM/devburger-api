
import { Router } from 'express'
import { v4 } from 'uuid'


import User from './app/models/User';

const routes = new Router()

//configuração de rota 
routes.get('/', async (req, res) => {

    //return res.status(200).json({ message: 'API is running' })
    const user = await User.create({
        id: v4(),
        name: 'Luiz Paulo',
        email: 'luiz@eemail.com',
        password_hash: '123456',
    });

    return res.status(201).json(user);
});


export default routes;