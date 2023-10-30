import React from 'react'
import Crendenciales from './Crendenciales'
import Offserve from '../componentes/Offserve'
import Login from '../login/Login'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

function Rutas() {
  const {isLoggedIn} = useAuth();

  // Lógica condicional para decidir qué mostrar
  const renderElement = () => {
    if (isLoggedIn) {
      return <Offserve />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <Routes>
      <Route path="/" index element={<Crendenciales />}/>
      <Route path="/home" element={ renderElement } />
      <Route path="/login" element={ <Login />} />
      {/* Otras rutas protegidas */}
    </Routes>
  )
}

export default Rutas