const express = require("express");
const router = express.Router();
const ClaseModel = require("../models/clase.model");
const validateClase = require("../utils/validator").validateClase;

// Obtener todas las clases
router.get("/", async (req, res) => {
  try {
    const clases = await ClaseModel.find();
    res.json(clases);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las clases" });
  }
});

// Agregar una nueva clase con validación
router.post("/", validateClase, async (req, res) => {
  try {
    const nuevaClase = new ClaseModel(req.body);
    await nuevaClase.save();
    res.status(201).json(nuevaClase);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar la clase" });
  }
});

module.exports = router;
