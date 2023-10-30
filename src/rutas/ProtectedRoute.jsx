import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { Navigate, useNavigate } from 'react-router-dom';

function ProtectedRoute({element}) {
    const { isLoggedIn, loginapp, logoutapp } = useAuth();
    const [count, setCount] = useState(0)
    const navigateTo = useNavigate()
    useEffect(() =>{
        if ( localStorage.getItem('auth') && isLoggedIn == false){
            loginapp()
        }
        else{
            if (isLoggedIn == false){
                logoutapp()
            }
            navigateTo("/login")
        }
        console.log("renderizo protected ", count)
        console.log("protected", isLoggedIn)
        setCount(count + 1)
    },[]);
  return (
    element
  )
}

export default ProtectedRoute
