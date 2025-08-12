const express = require('express');
const routes = require('./routes');

//Classe de configuração do express
class App {
    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(routes);

    }

}
module.exports = new App().app;