import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SideBar from './component/SideBar/SideBar'
import Review from './component/Review/Review'
import Order from './component/Order/Order'
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Inventory from './component/Inventory/Inventory';
import saveReview from './Panding/Panding';
import Checkout from './component/Checkout/Checkout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    children:[
     {
      path: 'order',
      element: <App/>
     },
     {
      path: 'login',
      element: <Login/>
     },
     {
      path: 'review',
      element: <Review/>,
      loader: saveReview
     },
     {
      path: 'inventory',
      element: <Inventory/>
     },
     {
      path: '/checkout',
      element: <Checkout/>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
