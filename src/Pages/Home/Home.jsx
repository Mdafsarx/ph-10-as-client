import Banner from "./Banner";
import ContractUs from "./ContractUs";
import CraftItems from "./CraftItems";
import PopularProduct from "./PopularProduct";

const Home = () => {
    return (
        <div>
            <Banner/>
            <CraftItems/>
            <PopularProduct/>
            <ContractUs/>
        </div>
    );
};

export default Home;