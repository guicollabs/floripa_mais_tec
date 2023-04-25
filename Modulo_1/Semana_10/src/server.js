require("dotenv").config();
const express = require("express");

const app = express();

// Database
const connection = require("./database/connection");

// Middleware
app.use(express.json());

// Routes
const routes = require("./routes");
app.use("/", routes);

// Port
const port = process.env.PORT || 3000;

const servidor = async () => {
  try {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    await connection.sync();
  } catch (error) {
    console.log(error);
  }
};
servidor();
