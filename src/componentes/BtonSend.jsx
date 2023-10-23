import React, { useEffect, useState } from 'react'
import {useMontoContexto} from '../componentes/Montocontext'
import axios from 'axios'

function BtonSend({configuracion, res, errorC}) {
    const [activo, setActivo] = useState(true)

    const clickeo = () =>{
        setActivo(false)
        axios (configuracion)
        .then(response =>{
            res(response);
            setTimeout( () =>{
                setActivo(true);
            }, 2000);
        })
        .catch(error => {
            errorC(error);
        });
    }

    //const clickeo = () => console.log("CLICKEO", configuracion)

    return (
        <>
            {activo &&
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="25" 
                    height="17" 
                    viewBox="0 0 25 17"
                    onClick={clickeo}>
                            <path d="M16.25,0,14.488,1.712l5.725,5.574H0V9.714H20.212l-5.737,5.574L16.25,17,25,8.5Z" fill="#626262"></path>
                </svg> 
            }
        </>
    )
}

export default BtonSend