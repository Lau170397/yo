const { check, validationResult } = require("express-validator");

// Middleware para validar productos
const validateProduct = [
  check("title").notEmpty().withMessage("El título del producto es obligatorio").isString().withMessage("El título debe ser un string"),
  check("description").notEmpty().withMessage("La descripción es obligatoria").isString().withMessage("La descripción debe ser un string"),
  check("price").isFloat({ min: 0 }).withMessage("El precio debe ser un número válido y mayor o igual a 0"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Middleware para validar clases
const validateClass = [
  check("url").notEmpty().withMessage("La imagen es obligatoria").isURL().withMessage("Debe ser una URL válida"),
  check("title").notEmpty().withMessage("El título de la clase es obligatorio").isString().withMessage("El título debe ser un string"),
  check("description").notEmpty().withMessage("La descripción es obligatoria").isString().withMessage("La descripción debe ser un string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateProduct, validateClass };
