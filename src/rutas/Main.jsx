import { Routes, HashRouter } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthProvider';
import Rutas from './Rutas';

const Main = () => {

  return (
    <HashRouter>
      <AuthProvider>
        <Rutas />
      </AuthProvider>
    </HashRouter>
  );
};

export default Main;
