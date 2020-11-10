"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const fiche = sequelize.define(
    "fiche",
    {
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
      taxi:{
        type:DataTypes.STRING,
      },
      date_mise_en_circulation: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      nom_ou_raison_sociale:{
        type:DataTypes.STRING,
      },
      rccm:{
        type:DataTypes.STRING
      },
      numero_impot:{
        type:DataTypes.STRING,
      },
      telephone:{
        type:DataTypes.STRING,
      },
      adresse_physique:{
        type:DataTypes.STRING,
      },
      commune:{
        type:DataTypes.STRING,
      }
    },
    
  );

 /*  fiche.associate = (models) => {
    fiche.belongsTo(models.user, {
      onDelete: "cascade",
    });
  }; */

  return fiche;
};
