'use strict';
const {
  Model
} = require('sequelize');
const Tags = require('./Tags');

module.exports = (sequelize, DataTypes) => {
  class Notas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notas.belongsToMany(models.Tags, {
        through: "NotasTags",
        as: "Tags",
        foreignKey: 'notaId'
      })
    }
  }
  Notas.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Notas',
    timestamps: false 
  });


  /* Notas.associate = (models) => {
    
  } */

  return Notas;
};