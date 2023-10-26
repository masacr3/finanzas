import axios from 'axios'
import React from 'react'
import { useMontoContexto } from './Montocontext'
import BtonSend from './BtonSend';

function ResetMonto({url, target, children}) {
  const { cambiarDato } = useMontoContexto();
  
  const res = (response) =>{
    cambiarDato();
  }

  const error = () =>{
    console.log("error")
  }
  const payload = {
    method : 'delete',
    url : url + target
  }
  return (
    <div className='box'>
        <div className='row pa-24 full-w jc-center fm-toko fs-48'>
            <span>Resetear {children}</span>
            <BtonSend configuracion={payload} res={res} errorC={error}/>
        </div>
    </div>
  )
}

export default ResetMonto