import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import UpdateTickets from "../../Components/UpdateTickets/UpdateTickets";

const TicketsView = () => {
    const [createform, setCreateForm] = useState(false)
    const [updateform, setUpdateForm] = useState(false)
    const AxiosPublic = UseAxiosPublic()
    const [tiketData, setticketData] = useState([])
    const { data: SeeTicket = [], refetch } = useQuery({
        queryKey: ['seeTicket'],
        queryFn: async () => {
            const res = await AxiosPublic.get("/seeTicket")
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
 
    const handelFromSumit = data =>{
        console.log(data)
        const ticketInfo ={
            assign_name: data.assign_name,
            date:data.date,
            status:data.status,
            subject: data.subject
        }
        AxiosPublic.post("/addTicket", ticketInfo)
        .then(res=>{
            if(res.data.acknowledged){
                Swal.fire({
                    title: "Good job!",
                    text: "your Tickets hasbeen added!",
                    icon: "success"
                }); 
                setCreateForm(false)
                refetch()
            }
        })
    }
    const handelTicketDelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                AxiosPublic.delete(`/deleteTicket/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            title: "Good job!",
                            text: "your projcet hasbeen deleted",
                            icon: "success"
                        });
                        refetch() 
                    }
                   
                })
            }
          });
    }

    const getTicket = (id)=>{
        setUpdateForm(true)
        AxiosPublic.get(`/getTicket/${id}`)
        .then(res=>{
            if(res.data){
                setticketData(res.data)

            }
        })
    }
   
    return (
        <div className=" p-5">
            <div className={` w-full h-screen top-0 left-0 bg-black bg-opacity-30 z-50 absolute flex justify-center items-center ${createform ? "top-0 duration-300" : "-top-[1500px] hidden"}`}>
                <div className=" bg-white w-[500px] p-5 rounded-lg space-y-4   ">
                    <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-semibold">Add ticket</h2>
                        <p onClick={handelClouseForm}><ImCross /></p>
                    </div>
                    <form onSubmit={handleSubmit(handelFromSumit)} className=" space-y-1 relative">
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
       

                <UpdateTickets
                    updateform={updateform}
                    setUpdateForm={setUpdateForm}
                    id={tiketData?._id}
                    refetch={refetch}
                ></UpdateTickets>
            <div className=" flex justify-between items-center p-4 border-b border-black ">
                <h2 className=" text-3xl font-bold">Tickets</h2>
                <div className=" flex gap-3  ">
                    <button onClick={handelCreateForm} className=" btn  bg-purple-800  text-white hover:bg-purple-600">Add ticket <FaPlus /></button>
                </div>
            </div>
            <div className=" bg-white border-2 border-gray-200 p-5 space-y-4 mt-4">
                <h2 className=" text-xl font-semibold">Project Information</h2>
                <div className=" lg:flex justify-between items-center">
                    <div className=" space-x-2">
                        <span className=" text-xl font-semibold">Show</span>
                        <select className="select select-bordered select-sm ">
                            <option disabled selected>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>40</option>
                            <option>80</option>
                            <option>100</option>
                        </select>
                        <span className=" text-xl font-semibold">entries</span>
                    </div>
                    <div>
                        <label htmlFor="">Search : <input type="search" className=" bg-slate-200 p-2" name="" id="" /></label>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        <thead>
                            <tr className=" t font-bold text-black uppercase">
                                <th>TICKIT ID</th>
                                <th>SUBJECT</th>
                                <th>ASSIGNED</th>
                                <th>CREATED DATE</th>
                                <th>STATUS</th>
                                <th>ACTIONS</th>

                            </tr>
                        </thead>
                        <tbody className=" text-sm">
                          {
                            SeeTicket?.map((Ticket, ids )=>  <tr key={ Ticket._id}>
                                <th>{ids +1}</th>
                                <td>{Ticket.subject}</td>
                                <td className=" flex gap-2 items-center">
                                    <img className=" w-8 h-8 rounded-full" src="https://i.ibb.co/hB4ctcW/avatar6.jpg" alt="" />
                                    <p className=" font-semibold">{Ticket.assign_name}</p>
                                </td>
                                <td>{Ticket.date}</td>
                                <td className="  font-bold text-green-500">{Ticket.status}</td>
                                <td className=" flex">
                                    <span onClick={()=>handelTicketDelete(Ticket?._id)} className=" rounded-lg p-2 hover:bg-red-500 hover:text-white text-red-500 "><AiFillDelete /></span>
                                    <span onClick={()=> getTicket(Ticket?._id)} className=" rounded-lg p-2 hover:bg-green-500 hover:text-white text-green-500 "><FaEdit /></span>
                                </td>

                            </tr>
)
                          }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TicketsView;