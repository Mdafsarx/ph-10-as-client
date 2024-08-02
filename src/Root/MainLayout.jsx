import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { Blocks } from "react-loader-spinner";
import { GiPaintBucket } from "react-icons/gi";

const MainLayout = () => {

    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000);



    return (
        <div className={loading && 'bg-[#1D232A]'}>
            {
                loading
                    ?
                    <div className="flex flex-col justify-center items-center min-h-screen">
                        <Blocks
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            visible={true}
                        />
                        <div className="flex items-center animate__animated animate__pulse  animate__infinite" >
                            <p className="text-3xl text-[#40F8FF]"><GiPaintBucket /></p>
                            <h2 className="md:text-2xl font-bold text-white">
                                Paint<span className="text-[#40F8FF]">S</span>tation</h2>
                        </div>
                    </div>
                    :
                    <div className="overflow-x-hidden scrollbar scrollbar-thumb-purple-500 scrollbar-track-[#A855F78C] overflow-y-scroll h-screen">
                     <Navbar />
                     <Outlet />
                     <Footer />
                    </div>
            }
        </div>
    );
};

export default MainLayout;