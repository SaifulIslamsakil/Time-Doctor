import { NavLink } from "react-router-dom";
import { SiSimilarweb } from "react-icons/si";
const Dashboard = () => {
    return (
        <div className=" space-y-10">
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
                        YESTERDAY
                    </NavLink></p>
                    <p> <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "  text-orange-500 " : "hover:text-orange-500"
                        }>
                        PAST 7 DAYS
                    </NavLink></p>
                    <p> <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "  text-orange-500 " : "hover:text-orange-500"
                        }>
                        PAST 30 DAYS
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
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className=" border bg-white p-5 text-xs space-y-2 rounded-lg shadow-lg border-orange-500">
                    <p>Total time tracked</p>
                    <h6 className=" text-lg font-semibold">8h 51m</h6>
                    <p>This week: 9h 34m</p>
                    <p>This month: 97h 52m</p>
                </div>
                <div className=" border bg-white p-5 text-xs space-y-2 rounded-lg shadow-lg border-orange-500">
                    <p>Idle minutes</p>
                    <h6 className=" text-lg font-semibold">8M</h6>
                    <progress className="progress progress-primary w-32" value="70" max="100"></progress>
                </div>

                <div className=" border bg-white p-5 text-xs space-y-2 rounded-lg shadow-lg border-orange-500">
                    <p>Unproductive time</p>
                    <h6 className=" text-lg font-semibold">16M</h6>
                    <progress className="progress progress-secondary w-32" value="100" max="100"></progress>
                </div>

                <div className=" border bg-white p-5 text-xs space-y-2 rounded-lg shadow-lg border-orange-500">
                    <p>Productive time</p>
                    <h6 className=" text-lg font-semibold">7H</h6>
                    <progress className="progress progress-accent w-32" value="10" max="100"></progress>
                </div>

                <div className=" border bg-white p-5 text-xs space-y-2 rounded-lg shadow-lg border-orange-500">
                    <p>Manual time</p>
                    <h6 className=" text-lg font-semibold">5M</h6>
                    <progress className="progress progress-success w-32" value="100" max="100"></progress>
                </div>

                <div className=" border bg-white p-5 text-xs space-y-2 rounded-lg shadow-lg border-orange-500">
                    <p>Mobile time</p>
                    <h6 className=" text-lg font-semibold">0M</h6>
                    <progress className="progress progress-warning w-32" value="40" max="100"></progress>
                </div>
            </div>
            <div className=" p-5 border border-orange-300 space-y-3 bg-white">
                <p>Recent Screencasts</p>
                <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                    <img src="https://i.ibb.co/G9x1MJQ/1.jpg" alt="" />
                </div>
            </div>
            <div className=" grid lg:grid-cols-2 gap-5">
                <div className=" p-5 space-y-3 bg-white rounded-lg border border-orange-300">
                    <div className=" flex justify-between ">
                        <p className=" font-semibold">Top used web & app</p>
                        <p className=" text-orange-400 underline hover:no-underline">Website & App</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className=" space-y-2 ">
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> my.indeed.com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> in.indeed.com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> linkedin.Com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb />  mail.google.com</p>
                        </div>
                        <div className="space-y-2">
                            <p><progress className="progress progress-info w-32" value="10" max="100"></progress></p>
                            <p><progress className="progress progress-info w-32" value="10" max="100"></progress></p>
                            <p><progress className="progress progress-info w-32" value="10" max="100"></progress></p>
                            <p><progress className="progress progress-info w-32" value="10" max="100"></progress></p>
                        </div>
                        <div className=" space-y-2 font-semibold">
                            <p >2h 10m</p>
                            <p>2h 10m</p>
                            <p>2h 10m</p>
                            <p>2h 10m</p>
                        </div>
                    </div>


                </div>
                <div className=" p-5 space-y-3 bg-white rounded-lg border border-orange-300">
                    <div className=" flex justify-between ">
                        <p className=" font-semibold">Unproductive web & app</p>
                        <p className=" text-orange-400 underline hover:no-underline">Website & App</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className=" space-y-2 ">
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> my.indeed.com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> in.indeed.com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> linkedin.Com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb />  mail.google.com</p>
                        </div>
                        <div className="space-y-2">
                            <p><progress className="progress progress-success w-32" value="70" max="100"></progress></p>
                            <p><progress className="progress progress-success w-32" value="70" max="100"></progress></p>
                            <p><progress className="progress progress-success w-32" value="70" max="100"></progress></p>
                            <p><progress className="progress progress-success w-32" value="70" max="100"></progress></p>

                        </div>
                        <div className=" space-y-2 font-semibold">
                            <p >2h 10m</p>
                            <p>2h 10m</p>
                            <p>2h 10m</p>
                            <p>2h 10m</p>
                        </div>
                    </div>
                </div>

                <div className=" p-5 space-y-3 bg-white rounded-lg border border-orange-300">
                    <div className=" flex justify-between ">
                        <p className=" font-semibold">Top tasks</p>
                        <p className=" text-orange-400 underline hover:no-underline">Project Report</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className=" space-y-2 ">
                            <p className=" flex gap-3 items-center"> Design Index Page</p>
                            <p className=" flex gap-3 items-center"> Create Blog</p>
                            <p className=" flex gap-3 items-center"> Authentication</p>
                            <p className=" flex gap-3 items-center">  Crude oprtaion</p>
                            <p className=" flex gap-3 items-center"> Create Logo</p>
                        </div>
                        <div className=" flex gap-3">
                            <div className="space-y-2">
                                <p className=" bg-green-200 px-5 rounded-lg text-center">Design</p>
                                <p className=" bg-red-200 px-5 rounded-lg text-center">Marketing</p>
                                <p className=" bg-pink-200 px-5 rounded-lg text-center">Development</p>
                                <p className=" bg-sky-200 px-5 rounded-lg text-center">Development</p>
                                <p className=" bg-yellow-200 px-5 rounded-lg text-center">Design</p>
                            </div>
                            <div className=" space-y-2 font-semibold">
                                <p >2h 10m</p>
                                <p>2h 10m</p>
                                <p>2h 10m</p>
                                <p>2h 10m</p>
                                <p>2h 10m</p>
                            </div>
                        </div>

                    </div>


                </div>

                <div className=" p-5 space-y-3 bg-white rounded-lg border border-orange-300">
                    <div className=" flex justify-between ">
                        <p className=" font-semibold">Top projects& app</p>
                        <p className=" text-orange-400 underline hover:no-underline">Project Report</p>
                    </div>

                    <div className=" flex justify-around items-center h-full">
                        <div>
                            <div className="radial-progress text-yellow-300" style={{ "--value": 70 }} role="progressbar">70%</div>
                            <p className=" text-center">Design </p>
                        </div>
                        <div>
                            <div className="radial-progress text-pink-300" style={{ "--value": 70 }} role="progressbar">70%</div>
                            <p className=" text-center">Development </p>
                        </div>
                        <div>
                            <div className="radial-progress text-green-300" style={{ "--value": 70 }} role="progressbar">70%</div>
                            <p className=" text-center">Marketing </p>
                        </div>
                       
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;