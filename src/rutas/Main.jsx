import React from 'react'
import { Route, Routes, Navigate, HashRouter, NavLink } from 'react-router-dom';
import Offserve from '../componentes/Offserve';

const isAuthenticated = false; // Verificar si el usuario está autenticado


// const Home = () => {
//   return (
//     <div>
//       <h1>INICIO</h1>
//       <NavLink to="/dashboard">Dashboard</NavLink>
//     </div>
    
//   )
// }



const Main = () => (
  <HashRouter>
    <Routes>
      <Route path="/" exact element={<Offserve />} />
      {/* <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      /> */}
    </Routes>
  </HashRouter>
);

export default Main