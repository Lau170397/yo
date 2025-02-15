const checkProductTypes = (request, response, next) => {
    const product = request.body;
    const validationErrors = [];
  
    if (typeof product.title !== "string") validationErrors.push("Title debe ser un string");
    if (typeof product.description !== "string") validationErrors.push("Description debe ser un string");
    if (typeof product.price !== "number") validationErrors.push("Price debe ser un number");
  
    if (validationErrors.length > 0) {
      return response.json({
        statusCode: 400,
        message: "Revisá el objeto enviado",
        validationErrors
      });
    }
  
    next();
  };
  
  module.exports = checkProductTypes;
  