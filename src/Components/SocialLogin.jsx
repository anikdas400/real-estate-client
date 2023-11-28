import { FcGoogle } from "react-icons/fc";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hook/useAxiosPublic";



const SocialLogin = () => {
    const {googleSignIn}= useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div>
            <p className="text-center mb-5">sign in with<button onClick={handleGoogleSignIn}  className="btn btn-ghost font-bold text-purple-900 text-lg"><FcGoogle className="text-lg" />Google</button></p>
        </div>
    );
};

export default SocialLogin;