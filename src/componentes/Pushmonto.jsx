import { useState } from 'react'
import axios from 'axios'
import { useMontoContexto } from './Montocontext'
import BtonSend from './BtonSend'

// eslint-disable-next-line react/prop-types
function Pushmonto({url, children}) {
    const [inputValue, setInputValue] = useState('')
    const [enablePush, setEnablePush] = useState(false)
    const [payload, setPayload] = useState({
        method: 'post',
        url: url,
        data : { monto: 0 },
        responseType: 'json',
    })

    const { cambiarDato } = useMontoContexto();


    const handleInputChange = (event) => {
        // Actualizar el estado del input cuando cambie
        setInputValue(event.target.value);
        setPayload({...payload, data : { monto : parseInt(event.target.value,10)}});
        if (event.target.value.length > 0 && enablePush == false ){
            setEnablePush(true)
        }else{
            if (enablePush == true && event.target.value.length == 0 ){
                setEnablePush(false)
            }
        }
    
      };
    
    const res = (response) =>{
        console.log('Respuesta de la API:', response.data);
        cambiarDato()
        setInputValue('')
        setEnablePush(false)
    }

    const errorC = (error) =>{
        console.error('Error al enviar datos:', error);
        setInputValue('')
        setEnablePush(false)
    }

    return (
        <div className="box">
            <div className='row pa-24 full-w fm-toko fs-48 pa-lf-20'>
                <span className='border-l'>$</span>
                <input 
                    className='fm-toko fs-48 pa-lf-40'
                    type="number" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="Monto" 
                />
            </div>
            
            <div className='row pa-24 full-w border-top jc-center fm-toko fs-30'>
                <span className={`off-select ${enablePush ? "color-verde" : "color-off"}`}>Pushear {children}</span>
                { enablePush &&
                    <>
                        <BtonSend configuracion={payload} res={res} />
                    </>}
            </div>
        </div>
    )
}

export default Pushmonto