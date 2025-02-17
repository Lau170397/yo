// frontend
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener los productos
    axios.get('http://localhost:8080/productos') // URL del backend
      .then(response => {
        setProductos(response.data); // Guardar los productos en el estado
      })
      .catch(error => {
        console.error("Hubo un error al obtener los productos:", error);
      });
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  return (
    <div className="App">
      <header className="App-header">
        <h1>Productos del Gimnasio</h1>
        <ul>
          {productos.map(producto => (
            <li key={producto.id}>{producto.nombre} - ${producto.precio}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
