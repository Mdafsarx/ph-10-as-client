import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import img1 from '../../assets/b.jpg'
import img2 from '../../assets/alp-ancel-WKQt_X-SKFI-unsplash.jpg'
import img3 from '../../assets/cartoon2.jpg'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="mb-16">
            <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                <div className='md:h-[80.5vh]'>
                    <img src={img2} className='w-full' />
                </div>
                <div className='md:h-[80.5vh]'>
                    <img src={img3} className='w-full'/>
                </div>
                <div className='md:h-[80.5vh]'>
                    <img src={img1} className='w-full'/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
