import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import './css/reset.css';
import './css/style.css';
import Root from './layouts/rootLayout';
import Home from './routes/Home';
import Place from './routes/Place';
import Stickercreation from './routes/CreateSticker';
import Error from './routes/Error';
//import all routes in here

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "place",
            element: <Place />,
          },
          {
            path: "stickercreation",
            element: <Stickercreation />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
