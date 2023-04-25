require("dotenv").config();
const express = require("express");
const connection = require("./database/connection");
const PlaceRoutes = require("./routes/PlaceRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use("/places", PlaceRoutes);

const port = process.env.PORT || 3000;

const servidor = async () => {
  try {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    await connection.authenticate();
  } catch (error) {
    console.log(error);
  }
};
servidor();
