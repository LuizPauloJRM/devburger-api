module.exports ={
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',   
    password: 'postgres',
    database: 'devburger',
    define:{
        timestamps: true, // Adiciona createdAt e updatedAt
        underscored: true, // Utiliza snake_case para os nomes das colunas
        underscoredAll: true, // Utiliza snake_case para os nomes das tabelas
    }
};