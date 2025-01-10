// backend/db/config.js

const mongoose = require('mongoose');
require('dotenv').config();

// Conectar a la base de datos de MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Termina el proceso si no se conecta correctamente
  }
};

module.exports = connectDB;
