/**
 * store : Cadastrar novo usuário
 * index : Listar vários usuários
 * show : Exibir um usuário específico
 * update : Atualizar um usuário
 * delete : Deletar um usuário
 */

// Controller para conectar com o banco de dados e manipular os dados dos usuários
import User from "../models/User"; // Importa o model User (estrutura do usuário no banco)
import { v4 } from "uuid"; // Importa a função v4 do pacote uuid para gerar IDs únicos

class UserController {
    // Método para cadastrar um novo usuário no banco de dados
    async store(req, resp) {
        try {
            // Extrai os dados enviados pelo cliente no corpo da requisição
            const { name, email, password_hash, admin } = req.body;

            // Cria um novo usuário no banco de dados com os dados recebidos
            const user = await User.create({
                id: v4(), // Gera um ID único usando uuid v4
                name,     // Nome do usuário
                email,    // Email do usuário
                password_hash, // Senha (já criptografada, se aplicável)
                admin,    // Booleano que indica se o usuário é administrador
            });

            // Retorna resposta com status 201 (Created) e os dados do novo usuário criado
            return resp.status(201).json({
                id: user.id,    // ID único do usuário
                name: user.name,
                email: user.email,
                admin: user.admin
            });

        } catch (error) {
            // Em caso de erro, exibe o erro no console e retorna resposta com erro 500 (Internal Server Error)
            console.error("Erro ao criar usuário:", error);
            return resp.status(500).json({
                error: "Erro ao criar usuário",
                details: error.message, // Exibe a mensagem específica do erro para facilitar o debug
            });
        }
    }
}

export default new UserController(); // Exporta uma instância da classe para uso nas rotas
