const Sequelize = require("sequelize");
const connection = require("./../database/connection");
const bcrypt = require("bcrypt");

const User = connection.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Digite seu nome",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: {
          msg: "Digite seu e-mail",
        },
      },
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validator: {
        notEmpty: {
          msg: "Digite um nome de usuário.",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      validator: {
        notEmpty: {
          msg: "Digite a senha.",
        },
        len: {
          min: 8,
          msg: "A senha dee ter no mínimo 8 caracteres.",
        },
      },
    },
  },
  {
    hooks: {
      beforeCreate: async function (user) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async function (user) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  }
);

module.exports = User;
