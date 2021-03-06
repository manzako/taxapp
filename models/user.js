"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
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


  return user;
};
