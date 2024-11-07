import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import CrearTorneo from './components/crear-torneo.component';
import CrearJugador from './components/crear-jugador.component';
import CrearEquipo from './components/crear-equipo.component';
import ListTorneo from './components/list-torneo.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ListTorneo /> },
      {
        path: 'torneos/crear',
        element: <CrearTorneo />,
      },
      {
        path: 'jugadores/crear',
        element: <CrearJugador />,
      },
      {
        path: 'equipos/crear',
        element: <CrearEquipo />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
