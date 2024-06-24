'use strict';
const {
    Model
} = require('sequelize');
const Tags = require('./Tags');

module.exports = (sequelize, DataTypes) => {
    class Rastreamento extends Model {
        static associate(models) {

        }
    }
    Rastreamento.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        conteudo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Rastreamento',
        timestamps: false
    });

    return Rastreamento;
};