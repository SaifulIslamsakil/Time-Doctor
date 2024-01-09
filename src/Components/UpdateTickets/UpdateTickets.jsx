import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";


const UpdateTickets = ({ updateform, setUpdateForm, id, refetch }) => {
    const AxiosPublic = UseAxiosPublic()

    const handelClouseUpdateForm = () => {
        setUpdateForm(false)
    }
    const {
        register,
        handleSubmit,
    } = useForm()
    const handelUpdateTicket = (data) => {
        const updateInfo = {
            assign_name: data.assign_name,
            date: data.date,
            status: data.status,
            subject: data.subject
        }
        console.log(updateInfo)
        AxiosPublic.put(`/updateTicket/${id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "your Ticket hasbeen updated!",
                        icon: "success"
                    });
                    refetch()
                    setUpdateForm(false)
                }
            })
    }
    return (
        <div>
            <div className={` w-full h-screen top-0 left-0 bg-black bg-opacity-30 z-50 absolute flex justify-center items-center ${updateform ? "top-0 duration-300" : "-top-[1500px] hidden"}`}>
                <div className=" bg-white w-[500px] p-5 rounded-lg space-y-4   ">
                    <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-semibold">Add ticket</h2>
                        <p onClick={handelClouseUpdateForm}><ImCross /></p>
                    </div>
                    <form onSubmit={handleSubmit(handelUpdateTicket)} className=" space-y-1 relative">
                        <div>
                            <label className=" w-full ">
                                <div className="label">
                                    <span >Subject</span>
                                </div>
                                <input type="text" {...register("subject", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                            </label>
                        </div>
                        <div>
                            <div className=" flex gap-4">
                                <label className=" w-full ">
                                    <div className="label">
                                        <span >Assign Name</span>
                                    </div>
                                    <input type="text" {...register("assign_name", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                                </label>

                                <label className=" w-full ">
                                    <div className="label">
                                        <span >Creted Date</span>
                                    </div>
                                    <input type="date" {...register("date", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Status</span>
                                </div>
                                <select {...register("status", { required: true })} className="select select-bordered">
                                    <option value="In progress" disabled selected>In progress</option>
                                    <option value="completed">completed</option>
                                    <option value="Wating">Wating</option>
                                    <option value="Decline">Decline</option>

                                </select>
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

export default UpdateTickets;