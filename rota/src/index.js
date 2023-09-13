import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import PaginaInicial from './paginas/PaginaIncial';
import PaginaSobre from './paginas/PaginaSobre';


const roteador = createBrowserRouter([
  {path:'/', element: <PaginaInicial/>},
  {path:'/sobre', element: <PaginaSobre/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <RouterProvider router={roteador}/>
  </React.StrictMode>
);

reportWebVitals();
