import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const privateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>;
};

export default privateRoute;