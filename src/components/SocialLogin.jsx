import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                    email: result.user?.email,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (

        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline normal-case"> <FaGoogle className="text-blue-600" />Login with <span className="text-xl font-bold text-pink-600">Google</span> </button>
        </div>
    );
};

export default SocialLogin;