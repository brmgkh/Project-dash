const Depart = require("../models/Depart");

exports.AddDepart = async (req, res) => {
  try {
    const newDepart = new Depart(req.body);
    await newDepart.save();
    res.status(200).send({ msg: "Depart added", newDepart });
  } catch (error) {
    res.status(500).send("couldn't add Depart");
  }
};

exports.GetDepart = async (req, res) => {
  try {
    const Departs = await Depart.find();
    res.status(200).send({ msg: "list of Departs", Departs });
  } catch (error) {
    res.status(500).send("couldn't get Departs");
  }
};
