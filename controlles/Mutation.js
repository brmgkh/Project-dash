const Mutation = require("../models/Mutation");
exports.GetMutation = async (req, res) => {
  try {
    const Mutations = await Mutation.find();
    res.status(200).send({ msg: "Liste of Mutations", Mutations });
  } catch (error) {
    res.status(500).send("couldn't get Mutations");
  }
};
exports.AddMutation = async (req, res) => {
  try {
    const newMutation = new Mutation(req.body);
    await newMutation.save();
    res.status(200).send({ msg: "Mutation added", newMutation });
  } catch (error) {
    res.status(500).send("couldn't add Mutation");
  }
};
