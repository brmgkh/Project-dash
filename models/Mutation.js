const mongoose = require("mongoose");
const MutationSchema = new mongoose.Schema({
  matricule: Number,
  nom: String,
  prenom: String,
  grade: String,
  direction: String,
  Nlieudetravail: String,
  fonction: String,
  date: String,
});
module.exports = mongoose.model("Mutation", MutationSchema);
