const express = require("express");
const { AddDetachement, GetDetachement } = require("../controlles/Detachement");
const DetachementRoute = express.Router();
DetachementRoute.post("/add", AddDetachement);
DetachementRoute.get("/all", GetDetachement);
module.exports = DetachementRoute;
