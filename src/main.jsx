import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// páginas
import Home from './routes/Home';
import Romance from './routes/Romance';
import Fantasia from './routes/Fantasia';
import Misteriosus from './routes/Misteriosus';
import NewPost from './routes/NewPost';
import Start from './routes/Start';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/romance",
        element: <Romance />,
      },
      {
        path: "/fantasia",
        element: <Fantasia />,
      },
      {
        path: "/misteriosus",
        element: <Misteriosus />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/start",
        element: <Start />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
