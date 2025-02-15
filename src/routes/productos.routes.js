const express = require('express');
const router = express.Router();
const {
  getAllProductController,
  addProductController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
} = require('../controllers/product.controller');
const checkProductTypes = require ('../utils/checkProductTypes');  // Suponiendo que tienes una validación para productos

// Rutas de productos
router.get('/product', getAllProductController);
router.get('/product/:id', getProductByIdController);
router.post('/product', checkProductTypes, addProductController);
router.put('/product/:id', updateProductController);
router.delete('/product/:id', deleteProductController);

module.exports = router;
