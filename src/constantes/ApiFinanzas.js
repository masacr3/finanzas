//const _endPoint = 'http://localhost:8000/'
const _endPoint = 'https://fastapitest-mjo6.onrender.com/'

export const ApiSaldo = _endPoint +'finanzas/saldo'
export const ApiGastos = _endPoint +'finanzas/gastos'
export const ApiIngresarDinero = _endPoint +'finanzas/ingresardinero'
export const ApiResetMonto = _endPoint +'finanzas/eliminar/all/'
export const ApiPopGasto = _endPoint +'finanzas/gastos/item'
export const ApiPopSaldo = _endPoint +'finanzas/saldos/item'
export const ApiGastosDetallado = _endPoint +'finanzas/gastos_detallado'
export const ApiIngresoDineroDetallado = _endPoint +'finanzas/ingresodinero_detallado'

//uvicorn main:app --host 0.0.0.0 --port 8000 --reload