const express = require("express");
const { AddConge, GetConge } = require("../controlles/Conge");
const CongeRoute = express.Router();
CongeRoute.get("/all", GetConge);
CongeRoute.post("/add", AddConge);
module.exports = CongeRoute;
