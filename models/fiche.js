"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const fiche = sequelize.define(
    "fiche",
    {
      id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV1,
      },
      type_personne:{
        type:DataTypes.STRING,
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
      },
    },

  );

  fiche.associate=models=>{
      fiche.hasMany(models.vehicule,{
      onDelete:"cascade"
      })
}
  return fiche;
};
