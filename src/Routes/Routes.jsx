import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Private from "../Private/Private";
import DashboardLayout from "../LayOut/Dashboard/DashboardLayour";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Projects from "../Pages/Projects/Projects";
import Tasks from "../Pages/Tasks/Tasks";
import TicketsView from "../Pages/TicketsView/TicketsView";
import TimeIlne from "../Pages/Time-line/TimeIlne";
import Reports from "../Pages/Reports/Reports";
import HoursTracked from "../Pages/HoursTracked/HoursTracked";

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
            },
            {
                path:"project",
                element:<Projects></Projects>
            },
            {
                path:"Tasks",
                element:<Tasks></Tasks>
            },
            {
                path:"Tickets",
                element:<TicketsView></TicketsView>
            },
            {
                path:"Time-line",
                element:<TimeIlne></TimeIlne>
            },
            {
                path:"Reports",
                element:<Reports></Reports>
            },
            {
                path:"Hours-Tracked",
                element:<HoursTracked></HoursTracked>
            },
        ]
    }
])
export default Routes