import React, { useEffect, useState } from 'react'
import {ApiLogin} from '../constantes/ApiFinanzas'
import {useAuth} from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {
    const [inputs, setInputs] = useState({username : "", password : ""})
    const { isLoggedIn, loginapp, logoutapp } = useAuth();
    const [cont , setCont] = useState(0)
    const navigate = useNavigate();

    const hUser = (e) => setInputs( {...inputs, username : e.target.value });
    const hPass = (e) => setInputs( {...inputs, password : e.target.value});

    const submit = () =>{
        console.log(inputs)
        axios.get(ApiLogin,{
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(`${inputs.username}:${inputs.password}`)}`,
              }
        })
        .then(res =>{
            localStorage.setItem("auth", `Basic ${btoa(`${inputs.username}:${inputs.password}`)}`)
            loginapp()
            setInputs({username : "", password : ""})
        })
        .catch(error => {
            console.log(error.response.status)
            logoutapp()
            localStorage.clear()
            setInputs({username : "", password : ""})
        });
    }

    useEffect( () => {

        console.log("renderizoLogin",cont)

        if (isLoggedIn == true ){
            navigate('/home');
        }
        else {
            if ( localStorage.getItem("auth") && isLoggedIn == false ){
                loginapp()
            }
        }

        setCont(cont+1)
    },[isLoggedIn])

  return (
    <div className='box box-login-h pa-24 col full-w'>
        <h1>Login</h1>
        <input 
            type="text" 
            placeholder='email'
            onChange={hUser}
            value={inputs.username}
            />
        <input 
            type="text" 
            placeholder='password'
            onChange={hPass}
            value={inputs.password}
            />
        <button className='bton-send' onClick={submit}>Send</button>
        <h3>{isLoggedIn ? "autorizado" : "sin permisos"}</h3>
    </div>
  )
}

export default Login