// backend

// Importamos el módulo de express y otras configuraciones
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Cargar las variables de entorno
const cors = require('cors');  // Para permitir solicitudes de diferentes orígenes (CORS)
const productoRoutes = require('./routes/productos'); // Ruta para productos

// Configuramos el servidor
const app = express();

// Middleware
app.use(cors()); // Habilitar CORS para que el frontend pueda hacer peticiones
app.use(express.json()); // Para poder leer datos en formato JSON

// Usamos las rutas para productos
app.use('/api/productos', productoRoutes);

// Conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Base de datos conectada.');
  } catch (error) {
    console.log('Error de conexión a la base de datos:', error);
  }
};

// Llamamos a la función para conectar la base de datos
connectDB();

// Definimos el puerto
const PORT = process.env.PORT || 8080;

// Arrancamos el servidor en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor backend funcionando en el puerto ${PORT}`);
});
