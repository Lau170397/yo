const express = require("express");
const {
  getAllClassController,
  getClassByIdController,
  addClassController,
  updateClassController,
  deleteClassController,
} = require ("../controllers/clases.controller")

//const ClaseModel = require("../models/clase.model");
//const validateClase = require("../utils/validator").validateClase;
const router = express.Router();

// Obtener todas las clases
// router.get("/clases", async (request, response) => {
//   try {
//     const clases = await ClaseModel.find();
//     response.json(clases);
//   } catch (error) {
//     response.status(500).json({ message: "Error al obtener las clases" });
//   }
// });

// // Agregar una nueva clase con validación
// router.post("/clases", validateClase, async (request, response) => {
//   try {
//     const nuevaClase = new ClaseModel(request.body);
//     await nuevaClase.save();
//     response.status(201).json(nuevaClase);
//   } catch (error) {
//     response.status(500).json({ message: "Error al agregar la clase" });
//   }
// });


router.get("/class", getAllClassController);
router.get("/class/:id", getClassByIdController);
router.post("/class", addClassController);
router.put("/class/:id", updateClassController);
router.delete("/class/:id", deleteClassController);
module.exports = router;
