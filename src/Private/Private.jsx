import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { Navigate } from "react-router-dom";


const Private = ({children}) => {
    const {lodding, user} = useContext(AuthContext)
    if(lodding){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

export default Private;