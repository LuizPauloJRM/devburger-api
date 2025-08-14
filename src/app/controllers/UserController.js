import { v4 } from 'uuid';
import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    async store(request, response) {
        //  Esquema de validação para garantir que os campos obrigatórios sejam enviados
        const schema = Yup.object().shape({
            name: Yup.string().required(),            // Nome obrigatório
            email: Yup.string().email().required(),   // Email válido obrigatório
            password: Yup.string().required().min(6), // Senha mínima de 6 caracteres
            admin: Yup.boolean(),                     // Campo opcional (se é admin ou não)
        });

        //  Valida os dados recebidos no body
        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            // Retorna erro 400 (Bad Request) com lista de erros de validação
            return response.status(400).json({ error: err.errors });
        }

        const { name, email, password, admin } = request.body;

        //  Verifica se já existe usuário com o mesmo email
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return response.status(400).json({ error: 'User already exists' }); // 400 = Conflito
        }

        //  Cria novo usuário no banco com ID único
        const user = await User.create({
            id: v4(),
            name,
            email,
            password, // Aqui idealmente deveria ser criptografada com bcrypt
            admin,
        });

        // Retorna apenas dados não sensíveis
        return response.status(201).json({
            id: user.id,
            name,
            email,
            admin,
        });
    }
}

export default new UserController();
