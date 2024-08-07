import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthCOntext } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { register, google,  reload, setReload } = useContext(AuthCOntext);
    const [loading, setLoading] = useState(false)


    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.fileInput.files[0];
        const formData = new FormData()
        formData.append('image', image)
        const password = e.target.password.value;

        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            return toast.warning('Password must contain at least one uppercase letter')
        }
        if (!/^(?=.*[a-z]).+$/.test(password)) {
            return toast.warning('Password must contain at least one lowercase letter')
        }
        if (password.length <= 6) {
            return toast.warning('Password must be at least six characters long')
        }

        // upload image
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, formData)



        register(email, password)
            .then(result => {
                if (result.user) {
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: data.data.display_url
                    })
                        .then(() => {
                            e.target.reset()
                            toast.success('Register successful')
                            setReload(!reload)
                            setLoading(false)
                        })
                        .catch(error => toast.error(error.message))
                }

            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
            });


    }

    const handleGoogle = function () {
        google()
            .then(result => {
                if (result.user) {
                    toast.success('Google register successful')
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // function handleGithub() {
    //     github()
    //         .then(result => {
    //             if (result.user) {
    //                 toast.success('Github register successful')
    //             }
    //         })
    //         .catch(error => {
    //             toast.error(error.message)
    //         })
    // }


    return (
        <div data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
            <Helmet>
                <title>PaintStation | Register</title>
            </Helmet>
            <div className="flex justify-center md:py-10">

                <div className="w-full max-w-md p-8 space-y-1.5 md:rounded-xl bg-[#40F8FF] text-black ">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form onSubmit={handleRegister} className="space-y-6">

                        <div className="space-y-0.5 text-sm">
                            <label htmlFor="username" className="block ">Name</label>
                            <input type="text" name="name" placeholder="Username" className="w-full px-4 py-3 rounded-md text-black" required/>
                        </div>


                        <div className="space-y-0.5 text-sm">
                            <label className="block ">Email</label>
                            <input type="text" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md text-black" required/>
                        </div>

                        <div className="space-y-0.5 text-sm">

                            <label className="block ">Photo url</label>
                            <input type="file" name="fileInput" className="file-input  file-input-md w-full max-w-sm" required/>

                        </div>



                        <div className="space-y-1 text-sm">
                            <label className="block ">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full text-black px-4 py-3 rounded-md  focus:dark:border-violet-600" required/>
                        </div>
                        <button className="block w-full p-3 text-center btn border-0 text-white font-bold bg-[#FF6AC2]">
                            {
                                loading ?
                                    <span className="flex justify-center">
                                        <TbFidgetSpinner className="animate-spin" />
                                    </span>
                                    :
                                    'Register'
                            }
                        </button>
                    </form>
                    <div className="divider"></div>
                    {/* <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 "></div>
                        <p className="px-3 text-sm ">Register with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 "></div>
                    </div> */}
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 btn btn-ghost btn-outline btn-block flex items-center " onClick={handleGoogle}>
                            <FcGoogle className='text-2xl' />
                            <span className='font-bold'>Or Register with Google</span>
                        </button>
                        {/* <button className="p-3 rounded-sm" onClick={handleGithub}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button> */}
                    </div>
                    <p className="text-xs text-center sm:px-6 ">Already have a account?
                        <Link className="underline  text-blue-800" to={'/Login'}>Login</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;