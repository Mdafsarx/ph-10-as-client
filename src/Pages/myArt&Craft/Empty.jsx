import { Link } from "react-router-dom";
import img from "../../assets/sad-face-90.png"

const Empty = () => {

    return (
        <div  data-aos="zoom-in"  data-aos-duration="3000"   >
            <section className="flex items-center  ">

                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-10 space-y-8 text-center sm:max-w-md">
                    <img src={img} className="w-2/4" />
                    <p className="text-3xl text-purple-500">You have not added anything to the my Art&Craft
                    </p>
                    <Link className="btn bg-[#FF6AC2] text-white" to={'/addCraft'}>Add Craft</Link>
                </div>

            </section>
        </div>
    );
};

export default Empty;