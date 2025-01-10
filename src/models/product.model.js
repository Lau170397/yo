const { mongoose, Schema } = require('mongoose');

// Esquema para los productos del gimnasio
const ProductSchema = Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

// Creamos el modelo a partir del esquema
const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
