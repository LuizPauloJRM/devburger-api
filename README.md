# devburger-api
 É uma API REST que gerencia produtos, usuários, pedidos e autenticação.
Cadastro e gerenciamento de usuários

Usuários podem se cadastrar, fazer login e logout.

Autenticação via JWT (jsonwebtoken).

Senhas são armazenadas de forma segura usando bcrypt.

Pode haver níveis de usuário (ex: cliente, admin).

Cadastro e gerenciamento de produtos (hambúrgueres, combos, etc)

CRUD de produtos (criar, ler, atualizar, deletar).

Produtos têm nome, descrição, preço, imagem, categoria, status.

Upload de imagens via multer.

Pedidos

Usuários podem fazer pedidos de produtos.

Possivelmente gestão do status do pedido (em preparo, enviado, entregue).

Associação de pedidos com usuários.

Banco de dados

Usa Sequelize para ORM (trabalhar com banco SQL).

Pode ter PostgreSQL (pg) como banco principal.

Modelos e migrations para criar as tabelas.

Middleware e segurança

Cors para permitir comunicação segura com o frontend.

Validação de dados com Yup.

Controle de acesso e autorização com JWT.

Execução e desenvolvimento

Usa nodemon para reiniciar servidor automaticamente ao salvar arquivos.

Usa dotenv para variáveis de ambiente (ex: porta, string de conexão com o banco).

Pode usar sucrase para suportar import/export ESModules no Node.

Fluxo típico da API DevBurger
Cliente faz requisição HTTP para a API (ex: POST /login ou GET /produtos).

A API verifica se o usuário está autenticado (token JWT válido).

A API acessa o banco de dados via Sequelize para pegar/criar/atualizar/excluir dados.

A API responde com JSON para o frontend.

Estrutura provável do seu projeto (com base no package.json e padrão comum):
bash
Copiar
Editar
/src
  /controllers      # Lógica de tratar requisições
  /models           # Definições das tabelas e dados
  /routes           # Definição das rotas HTTP
  /middlewares      # Middlewares (autenticação, erros, validação)
  /config           # Configurações (ex: banco, dotenv)
  app.js            # Configura e exporta o app Express
  server.js         # Inicia o servidor e lê variáveis do .env