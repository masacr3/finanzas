import { useState } from 'react'
import axios from 'axios'
import { useMontoContexto } from './Montocontext'

// eslint-disable-next-line react/prop-types
function Pushmonto({url, children}) {
    const [inputValue, setInputValue] = useState('')
    const [enablePush, setEnablePush] = useState(false)

    const { cambiarDato } = useMontoContexto();


    const handleInputChange = (event) => {
        // Actualizar el estado del input cuando cambie
        setInputValue(event.target.value);
        if (event.target.value.length > 0 && enablePush == false ){
            setEnablePush(true)
        }else{
            if (enablePush == true && event.target.value.length == 0 ){
                setEnablePush(false)
            }
        }
    
      };
    
    const enviarDatos = () => {
        if (inputValue.length == 0){
            console.log("no hay nada q enviar")
            return;
        }
        const numero  = parseInt(inputValue, 10);
        const payload = { monto : numero }
        axios({
            method: 'post',
            url: url,
            data: payload,
            responseType: 'json',
          })
          .then(response => {
            console.log('Respuesta de la API:', response.data);
            cambiarDato()
            setInputValue('')
            setEnablePush(false)
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
            setInputValue('')
            setEnablePush(false)
        });
    };

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" onClick={enviarDatos}>
                            <path d="M16.25,0,14.488,1.712l5.725,5.574H0V9.714H20.212l-5.737,5.574L16.25,17,25,8.5Z" fill="#626262"></path>
                        </svg>
                    </>}
                
            </div>
        </div>
    )
}

export default Pushmonto