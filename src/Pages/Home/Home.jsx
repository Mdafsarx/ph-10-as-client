import Banner from "./Banner";
// import Categories from "./Categories";
import ContractUs from "./ContractUs";
import CraftItems from "./CraftItems";
import PopularProduct from "./PopularProduct";


const Home = () => {
    return (
        <div>
            <Banner/>
            <CraftItems/>
            {/* <Categories/> */}
            <PopularProduct/>
            <ContractUs/>
        </div>
    );
};

export default Home;