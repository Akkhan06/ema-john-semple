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
import SignUp from './component/SignUp/SignUp';
import AuthContext from './AuthContext/AuthContext';
import PrivateRouter from './PrivateRouter/PrivateRouter';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    children:[
     {
      path: '/',
      element: <PrivateRouter><App/></PrivateRouter>
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
     },
     {
      path: '/signup',
      element: <SignUp></SignUp>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <RouterProvider router={router}/>
    </AuthContext>
  </React.StrictMode>,
)
