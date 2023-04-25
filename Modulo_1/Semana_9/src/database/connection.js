const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres",
  host: "",
  username: "",
  password: "",
  port: "5432",
  database: "",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
