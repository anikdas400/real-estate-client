import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Property from "../Pages/Home/Property/Property";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"property",
          element:<PrivateRoute><Property></Property></PrivateRoute>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signup",
          element:<SignUp></SignUp>
        },
        
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>
        },
        // agent route
        {
          path:"users",
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);