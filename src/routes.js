const { Router } = require('express')

const routes = new Router()
//configuração de rota 
routes.get('/', (req, res) => {
    return res.status(200).json({ message: 'API is running' })
})

module.exports = routes