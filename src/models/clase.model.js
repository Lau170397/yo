const mongoose = require("mongoose");

const ClaseSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const ClaseModel = mongoose.model("Clase", ClaseSchema);
module.exports = ClaseModel;
