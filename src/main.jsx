import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './layouts/Main';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Stats from './Pages/Stats';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { 
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/statistics',
        element: <Stats></Stats>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
