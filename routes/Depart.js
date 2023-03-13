const express = require("express");
const { GetDepart, AddDepart } = require("../controlles/Depart");
const DepartRoute = express.Router();
DepartRoute.get("/all", GetDepart);
DepartRoute.post("/add", AddDepart);
module.exports = DepartRoute;
