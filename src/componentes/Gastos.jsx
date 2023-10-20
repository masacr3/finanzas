import { useState } from 'react';
import axios from 'axios';
import './Saldo.css'

// eslint-disable-next-line react/prop-types
const Gastos = ({apiUrl}) => {
  // Renderizar el saldo en el componente
  const [inputValue, setInputValue] = useState(''); // Estado para almacenar el valor del input

  const handleInputChange = (event) => {
    // Actualizar el estado del input cuando cambie
    setInputValue(event.target.value);
  };

  const enviarDatos = () => {
    // Realizar una solicitud POST usando Axios con el valor del input
    const numero = parseInt(inputValue, 10); // Usa parseInt para enteros o parseFloat para números de punto flotante
    axios.post(apiUrl, { saldo: numero })
      .then(response => {
        // Manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
        console.log('Respuesta de la API:', response.data);
      })
      .catch(error => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error
        console.error('Error al enviar datos:', error);
      });
  };



  return (
    <div>
      Gastos Totales 

      <div className="box">
        Push gasto
        {/* Input para capturar los datos */}
            <input 
                type="number" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Introduce tus datos" 
            />
        {/* Botón para enviar los datos */}
        <button onClick={enviarDatos}>Enviar Datos</button>
      </div>
    </div>
  );
};

export default Gastos;