import { createContext, useContext, useState } from "react";

// Crear un contexto
const MiContexto = createContext();

// Componente Padre que proporciona el contexto
// eslint-disable-next-line react/prop-types
const Montocontext = ({ children }) => {
  const [montoActualizado, setMontoActualizado] = useState(true);

  const cambiarDato = () => {
    setMontoActualizado(!montoActualizado);
  };

  return (
    <MiContexto.Provider value={{ montoActualizado, cambiarDato }}>
      {children}
    </MiContexto.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMontoContexto = () => {
    return useContext(MiContexto);
  };

export default Montocontext