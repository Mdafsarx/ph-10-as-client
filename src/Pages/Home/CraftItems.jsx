import { useEffect, useState } from "react";
import Card from "./CarftCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from "axios";


const CraftItems = () => {


    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/craftSection')
            .then(data => setItems(data.data))
    }, [])


    return (


        <div className="max-w-7xl mx-auto space-y-10">
            {/* Craft Items Section title */}

            <div className="flex justify-end">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Crafting dreams into reality</h1>
                    <p>Being made by human hands, the craft is made for human hands: we can not <br />only see it but caress it with our fingers</p>
                </div>
            </div>

            <div className="flex justify-start">
                <div className="mb-20 flex max-w-4xl">

                    <Swiper
                        slidesPerView={4}
                        centeredSlides={true}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}

                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {items?.slice(0,6).map((item, i) => <SwiperSlide key={i}><Card item={item}></Card></SwiperSlide>)}
                    </Swiper>

                </div>
            </div>

        </div>
    );
};

export default CraftItems;