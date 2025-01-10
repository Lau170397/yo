const checkProductTypes = (request, response, next) => {
    const product = request.body;
    const validationErrors = [];
  
    if (typeof product.name !== "string") validationErrors.push("Name debe ser un string");
    if (typeof product.price !== "number") validationErrors.push("Price debe ser un number");
    if (typeof product.category !== "string") validationErrors.push("Category debe ser un string");
    if (typeof product.stock !== "number") validationErrors.push("Stock debe ser un number");
  
    if (validationErrors.length > 0) {
      return response.json({
        statusCode: 400,
        message: "Revisa el objeto que mandas",
        validationErrors
      });
    }
  
    next();
  };
  
  module.exports = checkProductTypes;
  