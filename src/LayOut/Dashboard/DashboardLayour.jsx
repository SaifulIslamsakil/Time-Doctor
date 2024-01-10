import { NavLink, Outlet } from "react-router-dom";
import { FaBandAid, FaHome } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdAccessTimeFilled, MdOutlineTaskAlt } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { FaRegFaceSmile } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaUserClock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
const Dashboard = () => {
    const [menu, setMenu] = useState(true)
    const {logOut} = useContext(AuthContext)
    const menuItem = <>
        <li>
            <NavLink to="/Dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <FaHome /> </span> Dashboard
            </NavLink>
        </li>
        
        <li>
            <NavLink to="/Dashboard/Hours-Tracked"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <FaUserClock /> </span> Hours Tracked
            </NavLink>
        </li>
        <li>
            <NavLink to="/Dashboard/project"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <PiSuitcaseSimpleBold /> </span> Projects
            </NavLink>
        </li>
        <li>
            <NavLink to="/Dashboard/Tasks"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <MdOutlineTaskAlt />  </span> Tasks
            </NavLink>
        </li>
        <li>
            <NavLink to="/Dashboard/Tickets"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <FaBandAid />  </span> Tickets View
            </NavLink>
        </li>
        <li>
            <NavLink to="/Dashboard/Time-line"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <MdAccessTimeFilled /> </span> Time line
            </NavLink>
        </li>
        <li>
            <NavLink to="/Dashboard/Reports"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <BsBarChartFill /> </span> Reports
            </NavLink>
        </li>
        <li>
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <PiTelevisionSimpleBold /> </span> Screencasts
            </NavLink>
        </li>
        <li>
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <FaRegFaceSmile /> </span> Agents
            </NavLink>
        </li>
        <li>
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : " text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <FaChartLine /> </span> Attendance
            </NavLink>
        </li>
     
        <li>
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " bg-orange-400  text-white p-2 rounded-lg flex items-center gap-2" : "  text-gray-800 hover:bg-orange-400  hover:text-white p-2 hover:rounded-lg flex hover:flex items-center gap-2"
                }>
                <span className=" text-xl"> <CgProfile /> </span> Profile
            </NavLink>
        </li>
    </>
    const handelMenuToggel = () => {
        setMenu(!menu)
    }
    const handelLogout = ()=>{
        logOut()
        .then(res=>{
            if(res){
                Swal.fire({
                    title: "Thank you!",
                    text: "Your Account successfully logot",
                    icon: "success"
                });
            }
        })
        .catch(err=>{
            if(err){
                Swal.fire({
                    title: "wrong!",
                    text: "please try agein",
                    icon: "wrong"
                });
            }
        })
    }
    return (
        <div>
            <div className=" p-5 bg-white shadow-xl  flex justify-between border items-center ">
                <div className=" flex gap-2 items-center">
                    <div onClick={handelMenuToggel} >
                        <p className=" text-2xl">{menu ? <CgClose /> : <GiHamburgerMenu />}</p>
                    </div>
                    <img className=" w-40 hidden md:block" src="https://i.ibb.co/2g8cLmX/timedoctor-logo.png" alt="" />
                </div>
                <div className=" flex items-center gap-4">
                    <p className=" text-3xl"><FaBell /></p>
                    <div className="avatar online">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />
                        {/* sun icon */}
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    <p onClick={handelLogout} className=" text-3xl font-bold"><HiOutlineLogout /></p>
                </div>
            </div>

            <div className=" bg-slate-100  flex">
                <div className={`w-[70%] md:w-[50%] lg:w-[20%] p-3 absolute z-50 lg:static bg-white  shadow-xl border ${menu ? "block duration-1000" : "hidden"}`}>
                    <ul className="p-3 text-lg font-semibold space-y-2">
                        {menuItem}
                    </ul>
                </div>

                <div className={` ${ menu ?"w-[80%]":"w-full"} p-5`}>
                <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;