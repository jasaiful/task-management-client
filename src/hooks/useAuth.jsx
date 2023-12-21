import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const useAuth = () => {
    const { user, updateUser } = useContext(AuthContext);

    return {
        user,
        updateUser,
    };
};


export default useAuth;