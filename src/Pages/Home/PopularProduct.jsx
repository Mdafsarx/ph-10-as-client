import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import axios from "axios";

const PopularProduct = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://ph-10-as-server.vercel.app/CraftItem')
            .then(data => setItems(data.data))
    }, [])
    const [show, setShow] = useState(4);
    const [view, setView] = useState(true)



    return (
        <div className="my-20 space-y-10 max-w-7xl mx-auto" data-aos="zoom-in" data-aos-duration="3000"   data-aos-delay="1000" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className="text-center">
                <h4>Visit Our Store</h4>
                <h4 className="text-4xl font-bold uppercase">POPULAR Drawing</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                {
                    items?.slice(0, show).map(item => <PopularCard key={item._id} data={item} />)
                }

            </div>


            {
                view ? 
                    <div className="flex justify-center ">
                        <button className="btn bg-gradient-to-r from-[#000000] to-[#00000050] text-white"
                            onClick={() => {
                                setShow(items.length)
                                setView(false)
                            }}
                        >VIEW ALL</button>
                    </div> : ''
            }

        </div>
    );
};

export default PopularProduct;