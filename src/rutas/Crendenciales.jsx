import React, { useEffect } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { ApiLogin } from '../constantes/ApiFinanzas';
import { useNavigate } from 'react-router-dom';

function Crendenciales() {
    const {isLoggedIn, loginapp } = useAuth();
    const navTO = useNavigate();

    useEffect(()=>{
        if ( localStorage.getItem('auth')){
            loginapp();
            navTO("/home");
            return 
        }else{
            return navTO("/login");
        }
    },[])

    return (
        <div>

        </div>
  )
}

export default Crendenciales