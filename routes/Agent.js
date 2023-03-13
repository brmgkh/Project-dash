const express = require("express");
const {
  AddAgent,
  GetAgent,
  EditAgent,
  DeletAgent,
  nbrAgents,
} = require("../controlles/Agent");

const AgentRoute = express.Router();
AgentRoute.post("/add", AddAgent);
AgentRoute.get("/all", GetAgent);
AgentRoute.get("/nbragents", nbrAgents);
AgentRoute.put("/edit/:id", EditAgent);
AgentRoute.delete("/del/:id", DeletAgent);

module.exports = AgentRoute;
