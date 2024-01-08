import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Private from "../Private/Private";
import DashboardLayout from "../LayOut/Dashboard/DashboardLayour";
import Dashboard from "../Pages/Dashboard/Dashboard";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    },
    {
        path:"/Register",
        element:<Register></Register>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/Dashboard",
        element:<Private> <DashboardLayout></DashboardLayout> </Private>,
        children:[
            {
                path:"/Dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    }
])
export default Routes