import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
// import Categories from "./Categories";
import ContractUs from "./ContractUs";
import CraftItems from "./CraftItems";
import PopularProduct from "./PopularProduct";
import OurClientSays from "./OurClientSays";
import Contract from "./Contract";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PaintStation | Home</title>
            </Helmet>
            <Banner />
            <CraftItems />
            <PopularProduct />
            <OurClientSays />
            <Contract />
            <ContractUs />
        </div>
    );
};

export default Home;