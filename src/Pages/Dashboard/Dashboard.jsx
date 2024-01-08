import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { FaRegFaceSmile } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
const Dashboard = () => {
    const menu = <>
        <li>
            <NavLink to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
             <span className=" text-xl"> <FaHome  /> </span> Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
             <span className=" text-xl"> <PiTelevisionSimpleBold  /> </span> Screencasts
            </NavLink>
        </li>
        <li>
            <NavLink to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
             <span className=" text-xl"> <PiSuitcaseSimpleBold  /> </span> Projects
            </NavLink>
        </li>
        <li>
            <NavLink to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
             <span className=" text-xl"> <MdAccessTimeFilled  /> </span> Time line
            </NavLink>
        </li>
        <li>
            <NavLink to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
             <span className=" text-xl"> <BsBarChartFill  /> </span> Reports
            </NavLink>
        </li>
        <li>
            <NavLink to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
             <span className=" text-xl"> <FaRegFaceSmile  /> </span> Agents
            </NavLink>
        </li>
        <li>
            <NavLink to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "  text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
             <span className=" text-xl"> <CgProfile  /> </span> Profile
            </NavLink>
        </li>
    </>
    return (
        <div className=" bg-gray-100 h-screen w-full">
            <div className=" w-60 p-3 h-screen bg-white  shadow-xl fixed">
                <img className=" w-60" src="https://i.ibb.co/2g8cLmX/timedoctor-logo.png" alt="" />
                <ul className="p-3 text-lg font-semibold space-y-2">
                    {menu}
                </ul>
            </div>

        </div>
    );
};

export default Dashboard;