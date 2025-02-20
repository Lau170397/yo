const ProductModel = require("../models/product.model");


// Servicio para obtener todos los productos
const getAllProductService = async (request) => {
  const allProducts = await ProductModel.find();
  return allProducts;
};

// Servicio para obtener un producto por su ID
const getProductByIdService = async (request) => {
  const { id } = request.params;
  const productById = await ProductModel.findById(id);

  if (!productById) {
    return { message: "Producto no encontrado", statusCode: 404 };
  }

  return productById;
};

// Servicio para agregar un nuevo producto
const addProductService = async (request) => {
  const product = request.body;

  try {
    const newProduct = new ProductModel(product);
    await newProduct.save();
    return { message: "Producto generado con éxito", statusCode: 201 };
  } catch (error) {
    return { message: "Ocurrió un error al agregar el producto", statusCode: 400 };
  }
};

// Servicio para actualizar un producto
const updateProductService = async (request) => {
  const { id } = request.params;
  const productToEdit = request.body;

  try {
    const productById = await ProductModel.findById(id);

    if (!productById) {
      return { message: "Producto no encontrado", statusCode: 404 };
    }

    productById.title = productToEdit.title;
    productById.description = productToEdit.description;
    productById.price = productToEdit.price;
    
    

    await productById.save();
    return { message: "Producto actualizado con éxito", statusCode: 200 };
  } catch (error) {
    return { message: "Ocurrió un error al actualizar el producto", statusCode: 400 };
  }
};

// Servicio para eliminar un producto
const deleteProductService = async (request) => {
  const { id } = request.params;

  try {
    const productToDelete = await ProductModel.deleteOne({ _id: id });

    if (productToDelete.deletedCount === 0) {
      return { message: "Producto no encontrado", statusCode: 404 };
    }

    return { message: "Producto eliminado con éxito", statusCode: 200 };
  } catch (error) {
    return { message: "Ocurrió un error al eliminar el producto", statusCode: 400 };
  }
};

module.exports = {
  getAllProductService,
  addProductService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
};
