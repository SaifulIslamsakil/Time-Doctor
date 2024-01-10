import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const HoursTracked = () => {
    const [expan, setExpan] = useState(true)
    const handelExpanElement = ()=>{
        setExpan(!expan)
    }
    return (
        <div className=" space-y-4">
            <div className=" flex gap-3 items-center justify-between">
                <div className=" bg-gray-700 p-3 flex gap-5 text-white rounded-lg">
                    <p>  <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "  text-orange-500 " : "hover:text-orange-500"
                        }>
                        TODAY
                    </NavLink></p>
                    <p> <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "  text-orange-500 " : "hover:text-orange-500"
                        }>
                        WEEK
                    </NavLink></p>
                    <p> <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "  text-orange-500 " : "hover:text-orange-500"
                        }>
                        MONTH
                    </NavLink></p>

                </div>
                <div className=" flex gap-4">
                    <div>
                        <label className="form-control w-full max-w-60">
                            <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <div className=" space-y-3 border border-orange-300 rounded-lg p-5 bg-white shadow-xl">
                <div className=" flex items-center gap-3 justify-between">
                    <div className=" flex items-center gap-3 ">
                        <img className=" w-10 h-10 rounded-full" src="https://i.ibb.co/hB4ctcW/avatar6.jpg" alt="" />
                        <p className="  hover:text-orange-500">Saiful islam  </p>
                    </div>
                    <p onClick={handelExpanElement} className=" flex items-center gap-3 hover:text-orange-500">29h 33m <span><FaCaretDown /></span></p>

                </div>
                <progress className="progress progress-success" value="80" max="100"></progress>
                <div className={` border border-orange-300 rounded-lg p-5 flex justify-between items-center ${expan ? "block":"hidden"}`}>
                    <div className=" flex-1 space-y-3">
                        <p>Thu, Aug 26</p>
                        <p>Thu, Aug 26</p>
                        <p>Thu, Aug 26</p>
                        <p>Thu, Aug 26</p>
                    </div>
                    <div className=" flex-1 space-y-3" >
                        <div className=" flex gap-3 items-center">
                            <p>6h 51m</p>
                            <progress className="progress progress-success w-60" value="80" max="100"></progress>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <p>6h 51m</p>
                            <progress className="progress progress-success w-60" value="80" max="100"></progress>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <p>6h 51m</p>
                            <progress className="progress progress-success w-60" value="80" max="100"></progress>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <p>6h 51m</p>
                            <progress className="progress progress-success w-60" value="80" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" space-y-3 border border-orange-300 rounded-lg p-5 bg-white shadow-xl">
                <div className=" flex items-center gap-3 justify-between">
                    <div className=" flex items-center gap-3 ">
                        <img className=" w-10 h-10 rounded-full" src="https://i.ibb.co/hB4ctcW/avatar6.jpg" alt="" />
                        <p className="  hover:text-orange-500">Saiful islam  </p>
                    </div>
                    <p onClick={handelExpanElement} className=" flex items-center gap-3 hover:text-orange-500">29h 33m <span><FaCaretDown /></span></p>

                </div>
                <progress className="progress progress-success" value="80" max="100"></progress>
                <div className={` border border-orange-300 rounded-lg p-5 flex justify-between items-center ${expan ? "block":"hidden"}`}>
                    <div className=" flex-1 space-y-3">
                        <p>Thu, Aug 26</p>
                        <p>Thu, Aug 26</p>
                        <p>Thu, Aug 26</p>
                        <p>Thu, Aug 26</p>
                    </div>
                    <div className=" flex-1 space-y-3" >
                        <div className=" flex gap-3 items-center">
                            <p>6h 51m</p>
                            <progress className="progress progress-success w-60" value="80" max="100"></progress>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <p>6h 51m</p>
                            <progress className="progress progress-success w-60" value="80" max="100"></progress>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <p>6h 51m</p>
                            <progress className="progress progress-success w-60" value="80" max="100"></progress>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <p>6h 51m</p>
                            <progress className="progress progress-success w-60" value="80" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoursTracked;