import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const NavBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" flex justify-between items-center p-2 ">
            <img className=" w-60" src="https://i.ibb.co/2g8cLmX/timedoctor-logo.png" alt="" />
            <div>
                <ul className=" flex gap-4 items-center text-lg font-semibold text-gray-800">
                    <li><NavLink className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500 hover:pb-1">
                        Blog
                    </NavLink></li>
                    <li><NavLink to={"/Dashboard"} className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500 hover:pb-1">
                        Dashboard
                    </NavLink></li>
                    {
                        !user ? <>
                            <li ><NavLink to={"/Register"} className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500 hover:pb-1">
                                Register
                            </NavLink></li>
                            <li><NavLink className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500 hover:pb-1">
                                Login
                            </NavLink></li>
                        </> : ""
                    }



                </ul>
            </div>
        </div>
    );
};

export default NavBar;