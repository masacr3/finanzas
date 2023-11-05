import React, { useEffect, useState } from 'react'
import imgServe from '../assets/offserve-w.png'
import { useNavigate } from 'react-router-dom'
import { ApiLogin } from '../constantes/ApiFinanzas'
import { useAuth } from '../auth/AuthProvider'
import axios from 'axios'


function Offserve() {

  const { logoutapp } = useAuth();
  const navigate = useNavigate()
  const [cont, setCont] = useState(0)

  useEffect(() => {

    setCont(cont + 1)

    console.log("renderizo Offserve ", cont)


    console.log(localStorage.getItem('auth'))

    if (localStorage.getItem('auth') == null ){
      return navigate("/login")
    }

    const credencial = localStorage.getItem('auth')

    axios.get(ApiLogin, { 
      headers: {
      // 'Content-Type': 'application/json',
      'Authorization': credencial }
    })
    .then(res => console.log("tiene auth para usar la app"))
    .catch(erro =>{
      console.log("no tiene las credenciales para usar la app")
      navigate("/login")
      logoutapp()
      localStorage.clear()
    })
  },[])

  return (
    <div className='row full-h jc-center'>
        <img src={imgServe} className='off-serve' onClick={logoutapp} />
    </div>
  )
}

export default Offserve