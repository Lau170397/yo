
const express = require("express");
const { check, validationResult } = require("express-validator");
const {
  getAllClassController,
  getClassByIdController,
  addClassController,
  updateClassController,
  deleteClassController,
} = require("../controllers/clases.controller");

const router = express.Router();

// Middleware para validar datos
const validateClass = [
  check("url").isURL().withMessage("La URL debe ser válida"),
  check("title").notEmpty().withMessage("El título es obligatorio"),
  check("description").notEmpty().withMessage("La descripción es obligatoria"),
  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Rutas
router.get("/class", getAllClassController);
router.get("/class/:id", getClassByIdController);
router.post("/class", validateClass, addClassController);
router.put("/class/:id", validateClass, updateClassController);
router.delete("/class/:id", deleteClassController);

module.exports = router;
