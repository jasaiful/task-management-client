import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";


const SignUP = () => {

    const axiosPublic = useAxiosPublic();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // use form
    const { register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            photo: data.photoURL,
                            email: data.email,

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User created successfully.",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/dashboard'); //navigate to home page
                                }
                            })
                    })
                    .catch(error => console.log(error))
            });
    };

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <>
            <Helmet>
                <title>Task Vista | Sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content my-20 md:gap-20 flex-col lg:flex-row">
                    <div className="text-center">
                        <h1 className="text-4xl py-5 font-bold">Sign up now!</h1>
                        <img className="rounded-xl" src="https://i.ibb.co/WzbZ0C7/image.png" alt="image" />

                    </div>
                    <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="px-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name *</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    {...register("name", { required: true })}
                                    placeholder="your name"
                                    className="input input-bordered"
                                />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL *</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photoURL", { required: true })}
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email *</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password *</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 20,
                                        pattern: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]){8,20}/
                                    })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />

                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}

                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 8 characters</p>}

                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase, one lowercase, one number & one special character</p>}

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-secondary" type="submit" value="Sign up" />
                            </div>
                        </form>
                        <p className='text-center px-6 py-3'>
                            <small>Already have an account? <Link className="font-bold" to={"/login"}>Login</Link> </small>
                        </p>
                        <div className="pb-5 mx-auto">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUP;