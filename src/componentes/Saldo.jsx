import { useEffect, useState} from 'react';
import axios from 'axios';
import { useMontoContexto } from './Montocontext';
import { ApiSaldo } from '../constantes/ApiFinanzas'
import './Saldo.css';

//import { ApiSaldo } from '../constantes/ApiFinanzas';

const Saldo = () => {

  const { montoActualizado } = useMontoContexto();
  const [monto, setMonto] = useState(0);
  const [cont, setCont] = useState(0);

  useEffect(() => {
    setCont(cont + 1)
    console.log("Renderiso saldo ", cont + 1)
      axios.get(ApiSaldo)
      .then(response => {
        console.log("se llamo al servidor ", cont + 1)
        console.log(response.data.data);
        setMonto(parseInt(response.data.data));
      })
      .catch(error => {
        console.error('Error al cargar el saldo:', error);
      });
  }, [montoActualizado]);

  return (
    <div className='box pa-24'>
      <div className='row'>
        <span className='fm-toko fs-30'>Saldo</span> <span className='fm-toko fs-48'>$ {monto}</span>
      </div>
    </div>
  );
};

export default Saldo;
