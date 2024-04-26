import { NavLink } from "react-router-dom";
import { GiPaintBucket } from "react-icons/gi";


const Navbar = () => {

    const PageLink = <>

        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/allArt&Craft'}>All Art & craft</NavLink>
        <NavLink to={'/addCraft'}>Add Craft</NavLink>
        <NavLink to={'/myArt&Craft'}>My Art&Craft</NavLink>

    </>



    return (
        <div className="bg-gradient-to-r from-purple-500 to-[#FF6AC2] *:text-white">

            <div className="navbar  md:max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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

                <div className="navbar-end flex items-center gap-1 md:gap-2">
                    <NavLink className="btn bg-white btn-sm font-bold border-0" to={'/Login'}>Login</NavLink>
                    <NavLink className="btn bg-white btn-sm font-bold border-0" to={'/Register'}>Register</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;