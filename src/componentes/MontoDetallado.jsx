import axios from 'axios';
import { useEffect, useState } from 'react'
import { useMontoContexto } from './Montocontext';

function MontoDetallado({url, popUrl, children}) {
  const { cambiarDato } = useMontoContexto();
  const [data , setData] = useState([])
  const { montoActualizado } = useMontoContexto();

  useEffect( () =>{
    axios.get(url)
    .then(res =>{
      setData([...res.data.data])
      console.log("respuesta API [detallado]", res.data.data)
    })
  },[montoActualizado]);

  const popData = () => {
    axios.delete(popUrl)
      .then( res => {
        console.log("SE POPEO bien")
        cambiarDato();
      })
  }

  return (
    <div className='box pa-24'>
        <div className='row full-w'>
          <span className='fm-toko fs-48'>{children}</span>
          { data.length > 0 && <button className='bton-pop' onClick={popData}>POP</button> }
        </div>
        {data && 
          data.map( (item, index) =>(
            <div className='row' key={index}>
              <span className='fm-toko fs-30'>$ {item}</span>
            </div>
          ))
        }
    </div>
  )
}

export default MontoDetallado