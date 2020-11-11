"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const vehicule = sequelize.define(
    "vehicule",
    {
      id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV1,
      },
      genre: {
        type: DataTypes.STRING,
      },
      marque: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      couleur: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      chassis: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      puissance_fiscale: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      usage: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      date_mise_en_circulation: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },

    },

  );

  vehicule.associate=models=>{
      vehicule.belongsTo(models.fiche,{
        foreignKey:{
          allowNull:true
        }
      })

}
  return vehicule;
};
