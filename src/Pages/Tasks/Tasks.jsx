import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

import UseAxiosPublice from "../../Hooks/UseAxiosPublic"
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AuthContext } from "../../Provider/Provider";
import DragAndDrop from "../../Components/DragAndDrop/DragAndDrop";
const Tasks = () => {
    const [createform, setCreateForm] = useState(false)
    const AxiosPublice = UseAxiosPublice()
    const {user} = useContext(AuthContext)
    const { data: SeeTask = [], refetch } = useQuery({
        queryKey: ['SeeTask'],
        queryFn: async () => {
            const res = await AxiosPublice.get("/seeTask")
            return res.data
        }
    })
    const {
        register,
        handleSubmit,
    } = useForm()
    const handelCreateForm = () => {
        setCreateForm(true)
    }
    const handelClouseForm = () => {
        setCreateForm(false)
    }
    const handelFromSumit = (data) => {
        const taskInfo = {
            category: data.category,
            description: data.description,
            end_date: data.end_date,
            priority: data.priority,
            project_name: data.project_name,
            start_date: data.start_date
        }
        const notificationInfo = {
            userName : user?.displayName,
            notificationMasseged : "Add a new Task",
            project_name: data.project_name,
        }
        AxiosPublice.post("/createTask", taskInfo)
            .then(res => {

                if (res.data.acknowledged) {
                    AxiosPublice.post("/notification", notificationInfo)
                    .then(res=>{
                        if(res.data.acknowledged){
                            Swal.fire({
                                title: "Good job!",
                                text: "your projcet hasbeen updated!",
                                icon: "success"
                            });
                            setCreateForm(false)
                            refetch()
                        }
                    })
                    
                }
            })
    }
    return (
        <div className=" space-y-10 px-5 ">
            <div className={` w-full h-screen top-0 left-0 bg-black bg-opacity-30 z-50 absolute flex justify-center items-center ${createform ? "top-0 duration-300" : "-top-[1500px], hidden"}`}>
                <div className=" bg-white w-[500px] p-5 rounded-lg h-[550px] space-y-4 overflow-y-scroll  ">
                    <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-semibold">Create Project </h2>
                        <p onClick={handelClouseForm}><ImCross /></p>
                    </div>
                    <form onSubmit={handleSubmit(handelFromSumit)} className=" space-y-1 relative">
                        <div>
                            <label className=" w-full ">
                                <div className="label">
                                    <span >Project Name</span>
                                </div>
                                <input type="text" {...register("project_name", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Project Category</span>
                                </div>
                                <select {...register("category", { required: true })} className="select select-bordered">
                                    <option disabled selected>Select categories</option>
                                    <option value="Apps Development">Apps Development</option>
                                    <option value="WEB Development">WEB Development</option>
                                    <option value="UI & UX Design">UI & UX Design</option>
                                    <option value="Marketiong">Marketiong</option>
                                    <option value="SEO">SEO</option>
                                </select>
                            </label>
                        </div>

                        {/* <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Pick a file</span>
                                </div>
                                <input {...register("file", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                            </label>
                        </div> */}

                        <div>
                            <div className=" flex gap-4">
                                <label className=" w-full ">
                                    <div className="label">
                                        <span >Project Start Date</span>
                                    </div>
                                    <input type="date" {...register("start_date", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                                </label>

                                <label className=" w-full ">
                                    <div className="label">
                                        <span >Project End Date</span>
                                    </div>
                                    <input type="date" {...register("end_date", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Priority</span>
                                    </div>
                                    <select {...register("priority", { required: true })} className="select select-bordered">
                                        <option disabled selected>Select Priority </option>
                                        <option value="Highest">Highest</option>
                                        <option value="Ledium">Ledium</option>
                                        <option value="Low">Low</option>

                                    </select>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Description (optional)</span>
                                </div>
                                <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Add any extra details aboute requies"></textarea>

                            </label>
                        </div>

                        <div className=" flex justify-end pt-3 gap-3  ">


                            <button type="btn" className=" btn  bg-purple-800  text-white hover:bg-purple-600">Create  <FaPlus /></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className=" md:flex space-y-2 justify-between items-center p-4 border-b border-black ">
                <h2 className=" text-3xl font-bold">Task Management</h2>
                <div className=" flex gap-3  ">
                    <button onClick={handelCreateForm} className=" btn  bg-purple-800  text-white hover:bg-purple-600">Create Project <FaPlus /></button>
                </div>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5  ">
                <div className=" bg-white p-5 shadow-lg space-y-3 rounded-lg">
                    <h2 className=" text-xl font-semibold">Task Progress</h2>
                    <div>
                        <div className=" flex justify-between items-center">
                            <h4 className=" text-xl font-semibold">Website Design</h4>
                            <p>02/07</p>
                        </div>
                        <progress className="progress progress-primary  " value="20" max="100"></progress>
                    </div>
                    <div>
                        <div className=" flex justify-between items-center">
                            <h4 className=" text-xl font-semibold">Quality Assurancen</h4>
                            <p>02/07</p>
                        </div>
                        <progress className="progress progress-primary  " value="20" max="100"></progress>
                    </div>
                    <div>
                        <div className=" flex justify-between items-center">
                            <h4 className=" text-xl font-semibold">Website Design</h4>
                            <p>02/07</p>
                        </div>
                        <progress className="progress progress-primary  " value="20" max="100"></progress>
                    </div>
                    <div>
                        <div className=" flex justify-between items-center">
                            <h4 className=" text-xl font-semibold">UI/UX Design</h4>
                            <p>02/07</p>
                        </div>
                        <progress className="progress progress-primary  " value="20" max="100"></progress>
                    </div>
                </div>

                <div className=" bg-white p-5 shadow-lg space-y-5 rounded-lg">
                    <h2 className=" text-xl font-semibold">Recent Activity</h2>
                    <div className=" flex gap-3 items-center border-b pb-2">
                        <img className=" w-10 h-10 rounded-full" src="" alt="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        <div>
                            <p className=" text-lg font-semibold">Rechard Add New Task</p>
                            <p>20Min ago</p>
                        </div>
                    </div>
                    <div className=" flex gap-3 items-center border-b pb-2">
                        <img className=" w-10 h-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                        <div>
                            <p className=" text-lg font-semibold">Rechard Add New Task</p>
                            <p>20Min ago</p>
                        </div>
                    </div>
                    <div className=" flex gap-3 items-center border-b pb-2">
                        <img className=" w-10 h-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                        <div>
                            <p className=" text-lg font-semibold">Rechard Add New Task</p>
                            <p>20Min ago</p>
                        </div>
                    </div>

                </div>

                <div className=" bg-white p-5 shadow-lg space-y-5 rounded-lg">
                    <h2 className=" text-xl font-semibold">Allocated Task Members</h2>
                    <div className=" flex items-center justify-between border-b pb-2">
                        <div className=" flex  gap-2 items-center">
                            <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/YXnP9pd/avatar4.jpg" alt="" />
                            <div>
                                <p className=" font-semibold">Lucinda Massey</p>
                                <p>Ui/UX Designer</p>
                            </div>
                        </div>
                        <button className=" btn  bg-purple-800  text-white hover:bg-purple-600">Remove</button>
                    </div>
                    <div className=" flex items-center justify-between border-b pb-2">
                        <div className=" flex  gap-2 items-center">
                            <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/YXnP9pd/avatar4.jpg" alt="" />
                            <div>
                                <p className=" font-semibold">Lucinda Massey</p>
                                <p>Ui/UX Designer</p>
                            </div>
                        </div>
                        <button className=" btn  bg-purple-800  text-white hover:bg-purple-600">Remove</button>
                    </div>
                    <div className=" flex items-center justify-between border-b pb-2">
                        <div className=" flex  gap-2 items-center">
                            <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/YXnP9pd/avatar4.jpg" alt="" />
                            <div>
                                <p className=" font-semibold">Lucinda Massey</p>
                                <p>Ui/UX Designer</p>
                            </div>
                        </div>
                        <button className=" btn  bg-purple-800  text-white hover:bg-purple-600">Remove</button>
                    </div>
                </div>
            </div>
            <div>
                <DndProvider backend={HTML5Backend}>
                    <div>
                        <DragAndDrop></DragAndDrop>
                    </div>
                </DndProvider>
            </div>

        </div>
    );
};

export default Tasks;