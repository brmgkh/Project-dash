const mongoose = require("mongoose");
const DepartSchema = new mongoose.Schema({
  matricule: Number,
  nom: String,
  prenom: String,
  grade: String,
  direction: String,
  motif: String,
  fonction: String,
  date: String,
});
module.exports = mongoose.model("Depart", DepartSchema);
