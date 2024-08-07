import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CraftItems from "./CraftItems";
import Contract from "./Contract";
import Features from "./Features";
import OurTeam from "./OurTeam";
import Painting from "./Painting";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PaintStation | Home</title>
            </Helmet>

            <Banner />
            <Features/>
            <CraftItems />
            <OurTeam/>
            <Painting/>
            {/* <PopularProduct /> */}
            {/* <OurClientSays /> */}
            <Contract />
        </div>
    );
};

export default Home;