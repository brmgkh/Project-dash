const Detachement = require("../models/Detachement");

exports.GetDetachement = async (req, res) => {
  try {
    const Detachements = await Detachement.find();
    res.status(200).send({ msg: "list of Detachements", Detachements });
  } catch (error) {
    res.status(500).send("couldn't get Detachements");
  }
};

exports.AddDetachement = async (req, res) => {
  try {
    const NewDetachement = new Detachement(req.body);
    await NewDetachement.save();
    res.status(200).send({ msg: "Detachement added", NewDetachement });
  } catch (error) {
    res.status(500).send("couldn't add Detachement");
  }
};
