"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const fiche = sequelize.define(
    "user",
    {
      nom: {
        type: DataTypes.STRING,
      },
      mail: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      pwd:{
          type:DataTypes.STRING,
      },
    },
    {
      hooks: {
        afterValidate: (user) => {
          user.pwd = bcrypt.hashSync(employe.pwd, 8);
        },
      },
    }
  );

  user.associate = (models) => {
    user.hasMany(models.fiche, {
      onDelete: "cascade",
    });
  };

  return user;
};
