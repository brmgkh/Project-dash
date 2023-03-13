const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
});
module.exports = mongoose.model("admin", adminSchema);
