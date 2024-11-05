import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './layouts/Main';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Stats from './Pages/Stats';
import ItemCards from './componenets/ItemCards';
import SingleProductDetails from './Pages/SimgleProductDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('../gadgetCategory.json'),
        children:[
          {
            path: '/category/:category',
            loader: ()=> fetch('../gadgetData.json'),
            element: <ItemCards></ItemCards>,
          }
        ]
      },
      { 
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/statistics',
        element: <Stats></Stats>,
      },
      {
        path: '/:product_id',
        element: <SingleProductDetails></SingleProductDetails>,
        loader: ()=> fetch('../gadgetData.json'),
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
