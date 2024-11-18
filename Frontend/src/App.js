import React from 'react';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LayoutProvider, useLayout } from './context/AuthContext';
import { routes } from './routes';
import './styles/App.css';

const App = () => {
  return (
    <LayoutProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LayoutProvider>
  );
};

const AppRoutes = () => {
  const { isAuthenticated } = useLayout();

  return (
    <Routes>
      {routes.map(({ path, component: Component, layout: Layout, authRequired }, index) => (
        <Route
          key={index}
          path={path}
          element={
            authRequired && !isAuthenticated ? (
              <Navigate to="/login" />  // Redirige a Login si no está autenticado
            ) : (
              <Layout><Component /></Layout> // Muestra el componente con el layout adecuado
            )
          }
        />
      ))}
      
      {/* Ruta por defecto (cualquier otra no encontrada) */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default App;
