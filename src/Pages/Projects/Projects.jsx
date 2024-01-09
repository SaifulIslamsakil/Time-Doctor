
import { FaPlus } from "react-icons/fa6";
import { BsSendPlus } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import UpdateProject from "../../Components/UpdateProject/UpdateProject";
// import { useForm } from "react-hook-form";
// import { useContext, useState } from "react";
// import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";
// import UpdateProject from "../../components/UpdateProject/UpdateProject"
// import { AuthContext } from "../../Provider/Provider";


const Projects = () => {
    const [createform, setCreateForm] = useState(false)
    const [editeform, setEditeForm] = useState(false)
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
        console.log(data)
    }
    const handleDeleteProject = id => {
      console.log(id)
    }
    const handelEdite = (id) => {
        setEditeForm(true)
        console.log(id)
        // AxiosPublice.get(`/editeData/${id}`)
        //     .then(res => {
        //         if (res.data) {

        //             setEditeData(res.data)
        //         }
        //     })

    }
    return (
        <div className="">

        {/* create project form */}

        <div className={` w-full h-screen top-0 left-0 bg-black bg-opacity-30 z-50 absolute flex justify-center items-center ${createform ? "top-0 duration-300" : "-top-[1500px] hidden"}`}>
            <div className=" bg-white w-[500px] p-5 rounded-lg h-96 lg:h-[550px] space-y-4 overflow-y-scroll  ">
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
                        <div className=" lg:flex gap-4">
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
                        <div className=" flex gap-4">
                            <label className=" w-full ">
                                <div className="label">
                                    <span >Budget</span>
                                </div>
                                <input type="number" {...register("budget", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                            </label>
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


                        <button type="btn" className=" btn  bg-purple-800  text-white hover:bg-purple-600">create  <FaPlus /></button>
                    </div>
                </form>
            </div>
        </div>

        {/* Update project form */}


        <UpdateProject
            editeform={editeform}
            setEditeForm={setEditeForm}
            id={1}
        ></UpdateProject>
        <div className=" lg:flex justify-between items-center  space-y-3 border-b border-black">
            <h2 className=" text-3xl font-bold">Projects</h2>
            <div className=" lg:flex gap-3 items-center pb-3  space-y-5 ">
                <button onClick={handelCreateForm} className=" btn w-full lg:w-40 bg-purple-800 mx-auto  text-white hover:bg-purple-600">Create Project <FaPlus /></button>

            </div>

        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 space-y-5">
          <div  className=" bg-white p-5 rounded-lg relative space-y-3 shadow-lg">
                    <p className=" rounded-lg absolute -top-8 left-32 bg-purple-800 text-white flex items-center justify-center text-2xl p-5"><BsSendPlus className="text-center" /></p>
                    <p className=" text-center  ">{"project?.project_name"}</p>
                    <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-bold">{"project.category"}</h2>
                        <div className=" flex items-center text-xl">
                            <span onClick={() => handelEdite(1)} className=" border p-3 rounded-lg hover:bg-green-500 hover:text-white text-green-500"><FaEdit /></span>
                            <span onClick={() => handleDeleteProject(1)} className=" border p-3 rounded-lg hover:bg-red-500 hover:text-white text-red-500 "><MdDelete /></span>
                        </div>
                    </div>
                    <div className="avatar flex justify-center">
                        <div className="w-14 rounded-full ">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                    <div className=" flex gap-5 mt-3">
                        <div>
                            <p className=" flex items-center gap-2  "> <BiSolidCloudUpload /> 5 Month </p>
                            <p className=" flex items-center gap-2 "> <FaLink /> 10 Attanch </p>

                        </div>
                        <div>
                            <p className=" flex items-center gap-2 "> <FaUsers /> 50 Members </p>
                            <p className=" flex items-center gap-2 "> <MdMessage /> 50 </p>

                        </div>

                    </div>
                    <hr />
                    <div >
                        <div className=" flex justify-between items-center ">
                            <p className=" text-xl font-semibold">Progress</p>
                            <p className=" flex items-center gap-2 bg-purple-800 text-white p-1 rounded-lg"> <AiFillClockCircle /> 35 Days Left</p>
                        </div>
                        <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                    </div>
                </div>
        </div>
    </div>
    );
};

export default Projects;