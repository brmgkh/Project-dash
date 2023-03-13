const Agent = require("../models/Agent");
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
exports.AddAgent = async (req, res) => {
  try {
    const newAgent = new Agent(req.body);
    await newAgent.save();
    res.status(200).send({ msg: "Agent added", newAgent });
    console.log(req.body);
  } catch (error) {
    res.status(500).send("couldn't add agent");
  }
};

exports.GetAgent = async (req, res) => {
  try {
    const Agents = await Agent.find();
    res.status(200).send({ msg: "list of Agents", Agents });
  } catch (error) {
    res.status(500).send("couldn't get Agents");
  }
};

exports.nbrAgents = async (req, res) => {
  try {
    const nbragents = await Agent.count();
    res.status(200).send({ msg: `number of Agents : ${nbragents}`, nbragents });
  } catch (error) {
    res.status(500).send("couldn't count nbr of Agents");
  }
};

exports.EditAgent = async (req, res) => {
  try {
    const Agentmodifié = await Agent.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "Agent updated", Agentmodifié });
  } catch (error) {
    res.status(500).send({ msg: "couldn't update Agent" });
  }
};

exports.DeletAgent = async (req, res) => {
  try {
    await Agent.findByIdAndDelete(req.params.id);
    res.status(200).send("agent deleted");
  } catch (error) {
    res.status(500).send("agent was not deleted");
  }
};
