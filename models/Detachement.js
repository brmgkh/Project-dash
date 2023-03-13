const mongoose = require("mongoose");
const DetachementSchema = new mongoose.Schema({
  matricule: Number,
  nom: String,
  prenom: String,
  grade: String,
  direction: String,
  organismeDetachement: String,
  fonction: String,
  date: String,
});
module.exports = mongoose.model("Detachement", DetachementSchema);
