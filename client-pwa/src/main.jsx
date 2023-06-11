import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layouts/rootLayout';
import Home, { loader as homeLoader, action as homeAction } from './routes/Home';
import Explain, { action as explainAction } from './routes/Explain';
import Question, { action as questionAction, loader as questionLoader } from './routes/Question';
import Result, { action as resultAction, loader as resultLoader } from './routes/Result';
import FullResult, { action as fullResultAction } from './routes/FullResult';
import End from './routes/End';
import Video, { action as videoAction } from './routes/Video';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
        action: homeAction,
      },
       {
        path: "explain",
        element: <Explain />,
        action: explainAction,
      },
      {
        path: "question/:questionId",
        element: <Question />,
        action: questionAction,
        loader: questionLoader
      },
      {
        path: "question/:questionId/result",
        element: <Result />,
        action: resultAction,
        loader:resultLoader,
      },
      {
        path: "fullResult",
        element: <FullResult />,
        action: fullResultAction,
      },
      {
        path: "end",
        element: <End />
      },
       {
        path: "video",
         element: <Video />,
        action: videoAction
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);