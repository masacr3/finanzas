import axios from 'axios';
import React, { useEffect, useState } from 'react'

function montoDetallado({url, children}) {
  const [data , setData] = useState([])

  useEffect( () =>{
    axios.get(url)
    .then(res =>{
      setData([...res.data.data])
      console.log("respuesta API [gastos detallado]", res.data.data)
    })
  },[]);

  return (
    <div className='box'>
        <span className='fm-toko fs-48'>{children}</span>
        
    </div>
  )
}

export default montoDetallado