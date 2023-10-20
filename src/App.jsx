import './App.css'
import Saldo from './componentes/Saldo'
import Pushmonto from './componentes/Pushmonto'
import Montocontext from './componentes/Montocontext'
import { ApiIngresarDinero, ApiGastos } from './constantes/ApiFinanzas'

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
      </Montocontext>
    </div>
  )
}

export default App
