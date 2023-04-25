const express = require("express");
const routes = express.Router();

const Place = require("./v1/PlaceRoutes");
const User = require("./v1/UserRoutes");

routes.use("/api/v1/users", User);
routes.use("/api/v1/places", Place);

module.exports = routes;
