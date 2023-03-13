const mongoose = require("mongoose");
const AgentSchema = new mongoose.Schema({
  matricule: String,
  nom: String,
  prenom: String,
  genre: String,
  corps: String,
  grade: String,
  direction: String,
  fonction: String,
  situationAdministrative: String,
});
module.exports = mongoose.model("Agent", AgentSchema);
