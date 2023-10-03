import { useState, useEffect } from 'react';
import axios from 'axios';
import './Saldo.css'

const Saldo = () => {
  const [saldo, setSaldo] = useState("");
  const apiUrl = 'http://localhost:8000/finanzas/saldo';
  useEffect(() => {

    // Realizar la solicitud GET a la API utilizando Axios
    axios.get(apiUrl)
      .then(response => {
        // Actualizar el estado del saldo con los datos de la API
        //setSaldo(response.data.saldo);
        console.log(response.data.data)
        setSaldo(response.data.data)
      })
      .catch(error => {
        // Manejar errores, por ejemplo, mostrando un mensaje de error
        console.error('Error al cargar el saldo:', error);
      });
  }, []); // El segundo argumento del useEffect, un array vacío, asegura que se ejecute solo una vez al montar el componente

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
        const nuevoSaldo = parseInt(saldo, 10) + numero 
        setSaldo( nuevoSaldo.toString())
        setInputValue('')
      })
      .catch(error => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error
        console.error('Error al enviar datos:', error);
      });
  };



  return (
    <div>
      Salto Total {saldo}

      <div className="box">
        Agregar saldo
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

export default Saldo;
