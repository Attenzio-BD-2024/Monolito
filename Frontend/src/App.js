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
            authRequired
              ? (isAuthenticated
                ? <Layout><Component /></Layout> // Caso 3: Ruta autenticada y el usuario está autenticado
                : <Navigate to="/login" />) // Caso 1: Ruta autenticada y el usuario no está autenticado
              : (isAuthenticated
                ? <Navigate to="/" /> // Caso 2: Ruta no autenticada y el usuario está autenticado
                : <Layout><Component /></Layout>) // Caso 3: Ruta no autenticada y el usuario no está autenticado
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
