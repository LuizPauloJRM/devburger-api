import { Sequelize } from "sequelize";

class Product extends Sequelize.Model {
    init() {
        super.init({
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            category: Sequelize.STRING,
            path: Sequelize.STRING,
        }, {
            sequelize: Sequelize,
        });
    }
}

export default Product;