
import { useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa6';
import { ImCross } from 'react-icons/im';
import Swal from 'sweetalert2';

const UpdateProject = ({ editeform, setEditeForm, id }) => {
    // const { data: SeeProject = [], refetch } = useQuery({
    //     queryKey: ['all-class'],
    //     queryFn: async () => {

    //     }
    // })
    const {
        register,
        handleSubmit,
    } = useForm()
    const handelEditeClouseForm = () => {
        setEditeForm(false)
    }
    const handelEditeFromSumit = (data) => {
        const updateInfo = {
            budget: data.budget,
            category: data.category,
            description: data.description,
            end_date: data.end_date,
            priority: data.priority,
            project_name: data.project_name,
            start_date: data.start_date
        }
        console.log(updateInfo)
        // AxiosPublice.put(`/updateData/${id}`, updateInfo)
        //     .then(res => {
        //         if (res.data.modifiedCount > 0) {
        //             Swal.fire({
        //                 title: "Good job!",
        //                 text: "your projcet hasbeen updated!",
        //                 icon: "success"
        //             });
        //             setEditeForm(false)

        //         }
        //     })
    }
    return (
        <div>
            <div className={` w-full h-screen top-0 left-0 bg-black bg-opacity-30 z-50 absolute flex justify-center items-center ${editeform ? "top-0 duration-300" : "-top-[1500px] hidden"}`}>
                <div className=" bg-white w-[500px] p-5 rounded-lg h-96 lg:h-[550px] space-y-4 overflow-y-scroll  ">
                    <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-semibold">Edite your Project Project </h2>
                        <p onClick={handelEditeClouseForm}><ImCross /></p>
                    </div>
                    <form onSubmit={handleSubmit(handelEditeFromSumit)} className=" space-y-1 relative">
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


                            <button type="btn" className=" btn  bg-purple-800  text-white hover:bg-purple-600">Create  <FaPlus /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProject;