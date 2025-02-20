const express = require('express');
const cors = require('cors');

const productRoutes = require('../routes/routes'); // Rutas de productos
const classRoutes = require('../routes/clases.routes'); // Nueva ruta para clases

// Configurar el servidor
const server = express();

// Middlewares
server.use(express.json()); // Permite recibir JSON en las peticiones
//server.use(cors()); // Evita problemas de CORS en el frontend

// Ruta de bienvenida
server.get('/', (request, response) => {
    response.send("Bienvenidos a la API de productos y clases del gimnasio");
});

// Configuración de las rutas
server.use('/api', productRoutes); // Rutas para productos
server.use('/api', classRoutes); // Rutas para clases

module.exports = server;
