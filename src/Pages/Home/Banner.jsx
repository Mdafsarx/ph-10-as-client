// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../assets/cartoon.jpg'
import img2 from '../../assets/alp-ancel-WKQt_X-SKFI-unsplash.jpg'
import img3 from '../../assets/cartoon2.jpg'

const Banner = () => {

    return (


        <div className='bg-slate-900 mb-16'>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide>

                    <div className='flex  items-center justify-between'>

                        <div className='*:text-white text-center w-1/2 hidden  md:flex flex-col justify-center items-center'>
                            <h1 className='text-5xl font-bold'>Art is created with the heart <br /> and built with the mind.</h1>
                            <p className='mt-3'>We supply highly quality organic Painting</p>
                            <button className='btn bg-[#FF6AC2] border-none mt-3'>MORE</button>
                        </div>

                        <figure className='md:w-1/2'>
                            <img src={img1} />
                        </figure>

                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className='flex  items-center justify-between'>

                        <div className='*:text-white text-center w-1/2 hidden  md:flex flex-col justify-center items-center'>
                            <h1 className='text-5xl font-bold'>Art is created with the heart <br /> and built with the mind.</h1>
                            <p className='mt-3'>We supply highly quality organic Painting</p>
                            <button className='btn bg-[#FF6AC2] border-none mt-3' onClick={()=>{
                                scrollBy(0,1300)
                            }}>MORE</button>
                        </div>

                        <figure className='md:w-1/2'>
                            <img src={img2} />
                        </figure>

                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className='flex  items-center justify-between'>

                        <div className='*:text-white text-center w-1/2 hidden  md:flex flex-col justify-center items-center'>
                            <h1 className='text-5xl font-bold'>Art is created with the heart <br /> and built with the mind.</h1>
                            <p className='mt-3'>We supply highly quality organic Painting</p>
                            <button className='btn bg-[#FF6AC2] border-none mt-3'>MORE</button>
                        </div>

                        <figure className='md:w-1/2'>
                            <img src={img3} />
                        </figure>

                    </div>
                </SwiperSlide>



            </Swiper>

        </div>


    );
};

export default Banner;