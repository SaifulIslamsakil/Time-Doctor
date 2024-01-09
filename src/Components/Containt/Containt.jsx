import { useDrag } from "react-dnd";
import { RiMessage2Line } from "react-icons/ri";
import { IoLinkSharp } from "react-icons/io5";

const Containt = ({contents}) => {
    const {
        category,
        description,
        priority,
        project_name,
        _id
    } = contents
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "hadding",
        item: { id:_id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
    
    return (
        <div className="">
        <div ref={drag} className=" bg-white p-4 rounded-lg space-y-3 border-b-8 border-purple-500 ">
            <div className=" flex justify-between items-center ">
                <h2 className=" p-2 rounded-full bg-sky-200">{project_name}</h2>
                <div className=" text-center">
                    <img className=" w-10 h-10 rounded-full mx-auto" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    <p className=" bg-purple-200 rounded-lg mt-2 p-1">{priority}</p>
                </div>
            </div>
            <p className=" text-justify">{description}</p>
            <div className=" flex justify-between items-center">
                <div className=" flex items-center gap-1">
                    <p className=" flex items-center gap-1"><RiMessage2Line /> 54</p>
                    <p className=" flex items-center gap-1"><IoLinkSharp /> 43</p>
                </div>
                <p className=" bg-green-200 p-1 rounded-lg">{category}</p>
            </div>
        </div>
        {/* <h2 ref={drag} className=" p-10 bg-red-500 text-white mt-2" style={{
            border:isDragging ? "10px solid black":"0px"
        }}>{opo.title}</h2> */}
    </div>
    );
};

export default Containt;