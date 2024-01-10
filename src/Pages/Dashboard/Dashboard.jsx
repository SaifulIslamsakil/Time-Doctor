import { NavLink } from "react-router-dom";
import { SiSimilarweb } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../../Provider/Provider";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
    const [time, setTime] = useState(0)
    const [isRuning, setIsRuning] = useState(false)
    const AxiosPublice = UseAxiosPublic()
    const { user } = useContext(AuthContext)
    // Get the current date
    const currentDate = new Date();
    // Extract the day and month from the current date
    const day = currentDate.getDate(); // Get the day of the month (1-31)
    const month = currentDate.getMonth() + 1; // Get the month (0-11) and add 1 to display (1-12)

    // data get to serersite useing by tanstak quray and axios

    const { data = [], refetch } = useQuery({
        queryKey: ["Hours-Tracked"],
        queryFn: async () => {
            const res = await AxiosPublice.get("/Hours-Tracked")
            return res.data
        }
    })

    // timer

    useEffect(() => {
        let timer;
        if (isRuning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000);
        }
        return () => clearInterval(timer)
    }, [isRuning])

    const Timer = () => {
        setIsRuning(!isRuning)
    }

    // data post on server Site
console.log(user)
    const resetTimer = () => {
        setTime(0)
        setIsRuning(false)
        const TimeInfo = {
            month:month ,
            day:day,
            userName:user?.displayName,
            userEmail: user?.email,
            time: time
        }
        AxiosPublice.post("/Hours-Tracked", TimeInfo)
            .then(res => {
                if (res.data?.acknowledged) {
                    toast.success('Your work Successfully Added !')
                    refetch()
                }
            })

    }
    // convat to formentTime

    const formentTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    //  total Seconds 

    const totalSeconds = data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue?.time;
    }, 0);

    // convart to hours and minutes

    const currentValue = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        return ` ${String(hours).padStart(2, '0')}h  ${String(minutes).padStart(2, '0')}m`;
    };

    return (
        <div className=" space-y-10">
            <Toaster />
            <div className=" lg:flex gap-3 items-center justify-between space-y-5">
                <div className=" bg-gray-700 p-3 flex gap-5 lowercase text-white rounded-lg ">
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
                        PAST 30 DAYS
                    </NavLink></p>
                </div>

                <div className=" flex gap-4 items-center">
                    <p onClick={Timer} className=" w-10 h-10 hover:w-12 hover:h-12 hover:text-2xl hover:duration-300 text-xl rounded-full shadow-lg text-orange-400 flex justify-center items-center bg-white"> {!isRuning ? <FaPlay /> : <FaStopCircle />}</p>
                    <p className=" text-xl font-bold">{formentTime(time)}</p>
                    <p onClick={resetTimer} className="w-10 h-10 hover:w-12 hover:h-12 hover:text-2xl hover:duration-300 text-xl rounded-full shadow-lg text-orange-400 flex justify-center items-center bg-white "> <GrPowerReset /></p>
                </div>
                <div className=" md:flex items-center gap-5">
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
                <div className="  border bg-white p-5 text-xs space-y-2 rounded-lg shadow-lg border-orange-500">
                    <p>Total time tracked</p>
                    <h6 className=" text-lg font-semibold">{currentValue(totalSeconds)}</h6>
                    <p>This week: {currentValue(totalSeconds)}</p>
                    <p>This month: {currentValue(totalSeconds)}</p>
                   

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

            <div className=" grid lg:grid-cols-2 gap-5 ">
                <div className=" p-5 space-y-5 bg-white rounded-lg border border-orange-300">
                    <div className=" md:flex justify-between ">
                        <p className=" font-semibold">Top used web & app</p>
                        <p className=" text-orange-400 underline hover:no-underline">Website & App</p>
                    </div>
                    <div className="md:flex justify-between items-center space-y-3">
                        <div className=" space-y-2 ">
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> my.indeed.com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> in.indeed.com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> linkedin.Com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb />  mail.google.com</p>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <div className=" space-y-2 font-semibold">
                                <p >2h 10m</p>
                                <p>2h 10m</p>
                                <p>2h 10m</p>
                                <p>2h 10m</p>
                            </div>
                            <div className="space-y-2">
                                <p><progress className="progress progress-info w-32" value="10" max="100"></progress></p>
                                <p><progress className="progress progress-info w-32" value="10" max="100"></progress></p>
                                <p><progress className="progress progress-info w-32" value="10" max="100"></progress></p>
                                <p><progress className="progress progress-info w-32" value="10" max="100"></progress></p>
                            </div>
                        </div>

                    </div>


                </div>

                <div className=" p-5 space-y-3 bg-white rounded-lg border border-orange-300">
                    <div className=" md:flex justify-between ">
                        <p className=" font-semibold">Unproductive web & app</p>
                        <p className=" text-orange-400 underline hover:no-underline">Website & App</p>
                    </div>
                    <div className="md:flex justify-between items-center">
                        <div className=" space-y-2 ">
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> my.indeed.com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> in.indeed.com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb /> linkedin.Com</p>
                            <p className=" flex gap-3 items-center"><SiSimilarweb />  mail.google.com</p>
                        </div>
                        <div className=" flex  gap-4 items-center space-y-5">
                            <div className=" space-y-2 font-semibold">
                                <p >2h 10m</p>
                                <p>2h 10m</p>
                                <p>2h 10m</p>
                                <p>2h 10m</p>
                            </div>
                            <div className=" space-y-2">
                                <p><progress className="progress progress-success w-32" value="70" max="100"></progress></p>
                                <p><progress className="progress progress-success w-32" value="70" max="100"></progress></p>
                                <p><progress className="progress progress-success w-32" value="70" max="100"></progress></p>
                                <p><progress className="progress progress-success w-32" value="70" max="100"></progress></p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className=" p-5  bg-white rounded-lg border border-orange-300 space-y-5">
                    <div className=" md:flex justify-between ">
                        <p className=" font-semibold">Top tasks</p>
                        <p className=" text-orange-400 underline hover:no-underline">Project Report</p>
                    </div>
                    <div className="md:flex justify-between items-center space-y-4" >
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
                                <p>2h 10m</p>
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