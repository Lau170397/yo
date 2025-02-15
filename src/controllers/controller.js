const {
    getAllProductService,
    addProductService,
    getProductByIdService,
    updateProductService,
    deleteProductService
  } = require("../services/service");
  
  // Controladores para manejar la lógica de las rutas
  
  const getAllProductController = async (request, response) => {
    const allProducts = await getAllProductService(request); // Obtiene los productos desde la DB
    response.json(allProducts);
  };
  
  const getProductByIdController = async (request, response) => {
    const productById = await getProductByIdService(request);
    response.json(productById);
  };
  
  const addProductController = async (request, response) => {
    const newProduct = await addProductService(request); // Insertar un producto en la DB
    response.json(newProduct);
  };
  
  const updateProductController = async (request, response) => {
    const productToEdit = await updateProductService(request); // Edita un producto en la DB
    response.json(productToEdit);
  };
  
  const deleteProductController = async (request, response) => {
    const productToDelete = await deleteProductService(request); // Elimina un producto en la DB
    response.json(productToDelete);
  };
  
  module.exports = {
    getAllProductController,
    addProductController,
    getProductByIdController,
    updateProductController,
    deleteProductController,
  };
  