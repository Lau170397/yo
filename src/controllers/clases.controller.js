
const {
  getAllClassService,
  addClassService,
  getClassByIdService,
  updateClassService,
  deleteClassService,
} = require("../services/clases.service");

// Controladores para manejar la lógica de las rutas
const getAllClassController = async (request, response) => {
  const allClasses = await getAllClassService(request);
  response.json(allClasses);
};

const getClassByIdController = async (request, response) => {
  const ClassById = await getClassByIdService(request);
  response.json(ClassById);
};

const addClassController = async (request, response) => {
  try {
    const newClass = await addClassService(request);
    response.status(201).json(newClass);
  } catch (error) {
    response.status(400).json({ message: "Error al agregar la clase" });
  }
};

const updateClassController = async (request, response) => {
  try {
    const ClassToEdit = await updateClassService(request);
    response.status(200).json(ClassToEdit);
  } catch (error) {
    response.status(400).json({ message: "Error al actualizar la clase" });
  }
};

const deleteClassController = async (request, response) => {
  try {
    const ClassToDelete = await deleteClassService(request);
    response.status(200).json(ClassToDelete);
  } catch (error) {
    response.status(400).json({ message: "Error al eliminar la clase" });
  }
};

module.exports = {
  getAllClassController,
  getClassByIdController,
  addClassController,
  updateClassController,
  deleteClassController,
};


