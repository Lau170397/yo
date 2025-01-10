const express = require("express");
const {
  getAllProductController,
  addProductController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
} = require("../controllers/controller");
const checkProductTypes = require('../utils/checkProductTypes')

// Configurar los routers
const router = express.Router();

// Definir las rutas correspondientes al router de productos
router.get("/product", getAllProductController);
router.get("/product/:id", getProductByIdController);
router.post("/product", checkProductTypes, addProductController);
router.put("/product/:id", updateProductController);
router.delete("/product/:id", deleteProductController);

// Logica de las rutas -> delegado -> controller

module.exports = router;
