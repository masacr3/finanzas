import './App.css'
import Saldo from './componentes/Saldo'
import Pushmonto from './componentes/Pushmonto'
import Montocontext from './componentes/Montocontext'
import { ApiIngresarDinero, ApiGastos, ApiResetMonto, ApiGastosDetallado, ApiIngresoDineroDetallado } from './constantes/ApiFinanzas'
import  ResetMonto  from './componentes/ResetMonto'
import MontoDetallado from './componentes/MonotDetallado'


function App() {

  return (
    <div className='container-app'>
      <Montocontext>
        <Saldo/>
        <Pushmonto url={ApiIngresarDinero}>
          saldo
        </Pushmonto>
        <Pushmonto url={ApiGastos}>
          gasto
        </Pushmonto>
        <ResetMonto url={ApiResetMonto} target="gastos">
          gastos
        </ResetMonto>
        <ResetMonto url={ApiResetMonto} target="saldo">
          saldo
        </ResetMonto>
        <MontoDetallado url={ApiGastosDetallado}>
          Gasto detallado
        </MontoDetallado>
        <MontoDetallado url={ApiIngresoDineroDetallado}>
          Ingreso detallado
        </MontoDetallado>

      </Montocontext>
    </div>
  )
}

export default App
