
import axios from "axios";

const data = axios.create({
    baseURL:"http://localhost:5000"
})
const UseAxiosPublic = () => {
    return data
};

export default UseAxiosPublic;