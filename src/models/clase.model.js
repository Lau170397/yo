const { mongoose, Schema } = require("mongoose");

const ClassSchema = Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false });

const ClassModel = mongoose.model("Clase", ClassSchema);

module.exports = ClassModel;
