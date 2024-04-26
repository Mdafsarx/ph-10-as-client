import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div className="overflow-x-hidden">

            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default MainLayout;