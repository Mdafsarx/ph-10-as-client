import { NavLink, useLocation } from "react-router-dom";
import { GiPaintBucket } from "react-icons/gi";
import { useContext } from "react";
import { AuthCOntext } from "../Auth/AuthProvider";
import { Tooltip } from "react-tooltip";



const Navbar = () => {

    const { user, Logout, loading } = useContext(AuthCOntext);

    const PageLink = <>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-black lg:bg-white text-white lg:text-black border-none' : ''} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-black lg:bg-white text-white lg:text-black' : ''} to={'/allArt&Craft'}>All Art & craft</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-black lg:bg-white text-white lg:text-black' : ''} to={'/addCraft'}>Add Craft</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-black lg:bg-white text-white lg:text-black' : ''} to={`/myArt&Craft/${user?.email}`}>My Art&Craft</NavLink>
    </>

    const location = useLocation()
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


                <div className="flex items-center animate__animated animate__pulse animate__delay-3s animate__infinite" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" >
                    <p className="text-2xl text-[#40F8FF]"><GiPaintBucket /></p>
                    <h2 className="md:text-xl font-bold">
                        Paint<span className="text-[#40F8FF]">S</span>tation</h2>
                </div>


                {
                    loading ?


                        user ?
                            <div className="navbar-end flex items-center gap-2">
                                <div>
                                    <a id="my-anchor-element">
                                        <div className="avatar placeholder">
                                            <div className=" rounded-full w-7 mt-1 ring ring-[#40F8FF] ring-offset-base-100 ">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </div>
                                    </a>
                                    <Tooltip className="z-50"
                                        anchorSelect="#my-anchor-element"
                                        content={user?.displayName}
                                    />
                                </div>

                                <button className=" text-base hover:underline  " onClick={handleLogout}>Logout</button>
                            </div> :
                            <div className="navbar-end flex items-center gap-1 md:gap-3">
                                <NavLink className={({ isActive }) => isActive ? 'btn btn-sm' : 'text-base hover:underline'} to={'/Login'}>Login</NavLink>
                                {/* <NavLink className={({ isActive }) => isActive ? 'btn btn-sm' : 'text-base hover:underline'} to={'/Register'}>Register</NavLink> */}
                            </div>
                        : <div className="navbar-end"><span className="loading loading-bars loading-md"></span></div>

                }

                {
                    location.pathname === '/' ?

                        <label className="grid cursor-pointer place-items-center pl-2 mt-0.5">
                            {/* this hidden checkbox controls the state */}
                            {/* <input type="checkbox" className="theme-controller" /> */}
                            <input
                                type="checkbox"
                                value={'dark'} 
                                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1 border-0" />
                            {/* sun icon */}

                            <svg
                                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            {/* moon icon */}

                            <svg
                                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>

                        </label>
                        : ''
                }



            </div>

        </div>
    );
};

export default Navbar;