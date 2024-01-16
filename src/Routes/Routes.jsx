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
import AddProperty from "../Pages/Dashboard/AddProperty/AddProperty";
import AdminRoute from "./AdminRoute";
import ManageProperty from "../Pages/Dashboard/ManageProperty/ManageProperty";
import UpdateProperty from "../Pages/Dashboard/UpdateProperty/UpdateProperty";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AgentHome from "../Pages/Dashboard/AgentHome/AgentHome";



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
        // normal user
        {
          path:"cart",
          element:<Cart></Cart>
        },
        {
          path:"userHome",
          element:<UserHome></UserHome>
        },
      
        {

          path:"payment",
          element:<Payment></Payment>
        },
        {
          path:"paymentHistory",
          element:<PaymentHistory></PaymentHistory>
        },
        // admin & agent route
        {
          path:"adminHome",
          element:<AdminHome></AdminHome>
        },
        {
          path:"agentHome",
          element:<AgentHome></AgentHome>
        },
        {
          path:"users",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute> 
        },
        {
          path:"addProperty",
          element:<AddProperty></AddProperty>
        },
        {
          path:"updateProperty/:id",
          element:<UpdateProperty></UpdateProperty>,
          loader:({params}) => fetch(`https://real-estate-server-five.vercel.app/properties/${params.id}`)
        },
        {
          path:"manageProperty",
          element:<ManageProperty></ManageProperty>
        }
      ]
    }
  ]);