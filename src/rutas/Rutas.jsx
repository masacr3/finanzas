import React from 'react'
import Crendenciales from './Crendenciales'
import Offserve from '../componentes/Offserve'
import Login from '../login/Login'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'


function ProtectRoute({ component : Component , redirect, ...res}){
  const {isLoggedIn} = useAuth();

  if (isLoggedIn){
    return <Component {...res} />
  }else{
    return <Navigate to={redirect} />
  }
}


function Rutas() {
  const {isLoggedIn} = useAuth();

  return (
    <Routes>
      <Route path="/" index element={<Crendenciales />}/>
      <Route path="/home" element={<ProtectRoute component={Offserve} redirect="/login" /> } />
      <Route path="/login" element={ isLoggedIn ? <Navigate to="/home" /> : <Login />} />
      {/* Otras rutas protegidas */}
    </Routes>
  )
}

export default Rutas