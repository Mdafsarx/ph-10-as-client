import { NavLink } from "react-router-dom";
import { GiPaintBucket } from "react-icons/gi";
import { useContext } from "react";
import { AuthCOntext } from "../Auth/AuthProvider";


const Navbar = () => {

    const { user, Logout, loading } = useContext(AuthCOntext);

    const PageLink = <>
        <NavLink className={({isActive})=>isActive?'btn btn-sm':''} to={'/'}>Home</NavLink>
        <NavLink className={({isActive})=>isActive?'btn btn-sm':''} to={'/allArt&Craft'}>All Art & craft</NavLink>
        <NavLink className={({isActive})=>isActive?'btn btn-sm':''} to={'/addCraft'}>Add Craft</NavLink>
        <NavLink className={({isActive})=>isActive?'btn btn-sm':''} to={`/myArt&Craft/${user?.email}`}>My Art&Craft</NavLink>
    </>

    function handleLogout() {
        Logout()
    }



    return (
        <div className="bg-gradient-to-r from-purple-500 to-[#FF6AC2] *:text-white">

            <div className="navbar  md:max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu font-bold menu-sm dropdown-content mt-3 text-black z-50 p-2 shadow bg-base-100 rounded-box w-32 space-y-2">
                            {PageLink}
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal font-bold flex items-center gap-4">
                            {PageLink}
                        </ul>
                    </div>

                </div>


                <div className="flex items-center">
                    <p className="text-2xl text-[#40F8FF]"><GiPaintBucket /></p>
                    <h2 className="md:text-xl font-bold">
                        Paint<span className="text-[#40F8FF]">S</span>tation</h2>
                </div>



                {
                    loading ?


                        user ?
                            <div className="navbar-end flex items-center gap-2">
                                <div className="dropdown dropdown-hover">
                                    <div className="">
                                        <div className="avatar placeholder">
                                            <div className=" rounded-full w-8 ring ring-[#40F8FF] ring-offset-base-100 ">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="dropdown-content z-50 text-black menu p-2 shadow bg-base-100 rounded-lg w-auto">
                                        <h2>{user?.displayName}</h2>
                                    </ul>
                                </div>

                                <button className="btn bg-white btn-sm font-bold border-0" onClick={handleLogout}>Logout</button>
                            </div> :
                            <div className="navbar-end flex items-center gap-1 md:gap-3">
                                <NavLink className={({isActive})=>isActive?'btn btn-sm':'text-base hover:underline'} to={'/Login'}>Login</NavLink>
                                <NavLink className={({isActive})=>isActive?'btn btn-sm':'text-base hover:underline'} to={'/Register'}>Register</NavLink>
                            </div>
                        : <div className="navbar-end"><span className="loading loading-bars loading-md"></span></div>

                }





            </div>

        </div>
    );
};

export default Navbar;