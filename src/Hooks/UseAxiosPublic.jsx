
import axios from "axios";

const data = axios.create({
    baseURL:"https://task-management-server-oubo2yewe-saiful-islams-projects.vercel.app"
})
const UseAxiosPublic = () => {
    return data
};

export default UseAxiosPublic;