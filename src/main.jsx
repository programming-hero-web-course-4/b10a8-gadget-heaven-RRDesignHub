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
import EnlistedItems from './componenets/EnlistedItems';
import ErrorPage from './Pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('../gadgetCategory.json'),
        children:[
          {
            path: '/', 
            loader: () => fetch('../gadgetData.json'),
            element: <ItemCards ></ItemCards>,
          },
          {
              path: '/:category',
              loader: ()=> fetch('../gadgetData.json'),
              element: <ItemCards></ItemCards>,
          }
        ]
      },
      {
        path: '/product/:product_id',
        element: <SingleProductDetails></SingleProductDetails>,
        loader: ()=> fetch('../gadgetData.json'),
      },
      { 
        path: '/dashboard',
        element: <Dashboard />,
        children:[
          {
            path: '/dashboard/:addedItem', 
            element: <EnlistedItems></EnlistedItems>,
          }
        ]
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
