const ClassModel = require("../models/clase.model");


// Servicio para obtener todas las clases
const getAllClassService = async (request) => {
  const allClasses = await ClassModel.find();
  return allClasses;
};

// Servicio para obtener una clase por su ID
const getClassByIdService = async (request) => {
  const { id } = request.params;
  const ClassById = await ClassModel.findById(id);

  if (!ClassById) {
    return { message: "Clase no encontrada", statusCode: 404 };
  }

  return ClassById;
};

// Servicio para agregar una nueva clase
const addClassService = async (request) => {
  const clase = request.body;

  try {
    const newClass = new ClassModel(clase);
    await newClass.save();
    return { message: "Clase generada con éxito", statusCode: 201 };
  } catch (error) {
    return { message: "Ocurrió un error al agregar la clase", statusCode: 400 };
  }
};

// Servicio para actualizar una clase
const updateClassService = async (request) => {
  const { id } = request.params;
  const classToEdit = request.body;

  try {
    const classById = await ClassModel.findById(id);

    if (!classById) {
      return { message: "Clase no encontrada", statusCode: 404 };
    }

    classById.url = classToEdit.url;//chequear model
    classById.title = classToEdit.title;
    classById.description = classToEdit.description;
    
    

    await classById.save();
    return { message: "Clase actualizada con éxito", statusCode: 200 };
  } catch (error) {
    return { message: "Ocurrió un error al actualizar la clase", statusCode: 400 };
  }
};

// Servicio para eliminar una clase
const deleteClassService = async (request) => {
  const { id } = request.params;

  try {
    const classToDelete = await ClassModel.deleteOne({ _id: id });

    if (classToDelete.deletedCount === 0) {
      return { message: "Clase no encontrada", statusCode: 404 };
    }

    return { message: "Clase eliminada con éxito", statusCode: 200 };
  } catch (error) {
    return { message: "Ocurrió un error al eliminar la clase", statusCode: 400 };
  }
};

module.exports = {
  getAllClassService,
  addClassService,
  getClassByIdService,
  updateClassService,
  deleteClassService,
};
