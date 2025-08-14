import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

/**
 * Model User
 * Representa um usuário no banco de dados
 */
class User extends Model {
    static init(sequelize) {
        // Inicializa os campos da tabela
        super.init(
            {
                name: Sequelize.STRING,            // Nome do usuário
                email: Sequelize.STRING,           // Email do usuário
                password: Sequelize.VIRTUAL,       // Campo virtual para receber senha do usuário
                password_hash: Sequelize.STRING,   // Armazena o hash da senha no banco
                admin: Sequelize.BOOLEAN,          // Indica se é administrador
            },
            {
                sequelize,
            }
        );

        // Hook que gera o hash da senha antes de salvar no banco
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10);
            }
        });

        // Retorna a própria classe para encadeamento
        return this;
    }
}

export default User;
