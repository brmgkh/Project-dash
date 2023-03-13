const mongoose = require("mongoose");
const CongeSchema = new mongoose.Schema({
  matricule: String,
  nom: String,
  prenom: String,
  grade: String,
  direction: String,
  fonction: String,
  type: String,
  motif: String,
  date: String,
  durée: Number,
});
module.exports = mongoose.model("Conge", CongeSchema);
