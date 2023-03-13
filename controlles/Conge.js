const Conge = require("../models/Conge");

exports.AddConge = async (req, res) => {
  try {
    const newConge = new Conge(req.body);
    await newConge.save();
    res.status(200).send({ msg: "Conge added", newConge });
  } catch (error) {
    res.status(500).send("couldn't add Conge");
  }
};

exports.GetConge = async (req, res) => {
  try {
    const Conges = await Conge.find();
    res.status(200).send({ msg: "list of Conges", Conges });
  } catch (error) {
    res.status(500).send("couldn't get Conges");
  }
};
