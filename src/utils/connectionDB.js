const sequelize = require("../db/database");

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('db conectado');
    } catch (error) {
        console.error('erro na conexão db:', error);
    }
}

module.exports = connectDB;