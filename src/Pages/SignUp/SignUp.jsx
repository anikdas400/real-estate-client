import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const {createUser} = useContext(AuthContext)
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const loggerUser = result.user
                console.log(loggerUser)
                console.log(data.name)
        })
    }
    return (
        <>
            <Helmet>
                <title>JCX Industries | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-t-lg">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">

                        <img className="h-[30rem] rounded-lg" src="https://i.ibb.co/1YVLjJm/signup.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-20 bg-base-100">
                        <h1 className="text-5xl font-semibold text-center text-indigo-500 mt-5">Sign Up </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 font-semibold">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600 font-semibold">photoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600 font-semibold">Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === "required" && <p className="text-red-600 font-semibold">Password is required</p>
                                }
                                {errors.password?.type === "minLength" && <p className="text-red-600 font-semibold">Password must be 6 characters </p>
                                }

                                {errors.password?.type === "maxLength" && <p className="text-red-600 font-semibold">Password must be less then 20 characters</p>
                                }

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>

                        {/* {
            signUpError?  <p className="text-red-700 font-semibold mb-2 text-center">{signUpError}</p>:
            <p className="text-green-700 font-semibold mb-2 text-center">{success}</p>
        }
         */}

                        <p className="text-center mb-3">Already have an account?please <Link className="text-purple-700 font-bold text-lg" to="/login">Login</Link> </p>
                        <div className="divider divider-accent w-8/12 mx-auto text-purple-700 italic font-bold">OR</div>

                        <p className="text-center mb-5">sign in with<button className="btn btn-ghost font-bold text-purple-900 text-lg"><FcGoogle className="text-lg" />Google</button></p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;