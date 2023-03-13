const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//enregistrement de l'utilisateur
exports.Register = async (req, res) => {
  const { nomprenom, email, pass } = req.body;
  try {
    const foundEmail = await user.findOne({ email });
    const foundNomPrenom = await user.findOne({ nomprenom });
    if (foundEmail) {
      res
        .status(400)
        .send({ errors: [{ msg: "Cet Adresse email est utilisée" }] });
    } else if (foundNomPrenom) {
      res.status(400).send({ errors: [{ msg: "Nom et prénom existe déjà!" }] });
    } else {
      const users = new user(req.body);

      // hachage mot de passe
      const salt = 10;
      const hashpass = bcrypt.hashSync(pass, salt);
      users.pass = hashpass;

      // token
      const key = { id: users._id };
      const token = jwt.sign(key, "hello");
      await users.save();
      res.status(200).send({
        msg: "Succès d'Enregistrement",
        users,
        token,
      });
    }
  } catch (error) {
    res.status(500).send("l'utilisateur n'a pas pu s'enregistrer");
  }
};
// login de l'utilisateur
exports.Login = async (req, res) => {
  const { nomprenom, email, pass } = req.body;
  try {
    const users = await user.findOne({ nomprenom, email });
    if (!users) {
      res.status(400).send({ errors: [{ msg: "l'utilisateur n'existe pas" }] });
    } else {
      const match = await bcrypt.compare(pass, users.pass);
      if (!match) {
        res.status(400).send({ errors: [{ msg: "mot de passe incorrect" }] });
      } else {
        const key = { id: users._id };
        const token = jwt.sign(key, "hello");
        res.status(200).send({ msg: "connexion", users, token });
      }
    }
  } catch (error) {
    res.status(500).send("connexion impossible");
  }
};

exports.GetUsers = async (req, res) => {
  try {
    const Users = await user.find();
    res.status(200).send({ msg: "Liste of users", Users });
  } catch (error) {
    res.status(500).send("couldn't get tasks");
  }
};
exports.DeletUser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).send("user deleted");
  } catch (error) {
    res.status(500).send("user was not deleted");
  }
};
