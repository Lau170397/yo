const { mongoose, Schema } = require('mongoose');

// Esquema para los productos del gimnasio
const ProductSchema = Schema({
  id:{
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },

});

// Creamos el modelo a partir del esquema
const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
