const express = require("express");
const { AddMutation,GetMutation } = require("../controlles/Mutation");
const MutationRoute = express.Router();
MutationRoute.post("/add", AddMutation);
MutationRoute.get("/all", GetMutation);
module.exports = MutationRoute;