import AOS from 'aos';

const ClientCard = ({ image, days, rating, name, des }) => {

    AOS.init({
        disable: false,
        once: true, 
        mirror: false,
    });

    return (
        <div >

            <div className="flex flex-col h-96 w-80 p-6 shadow-md rounded-xl sm:px-12 text-black bg-gradient-to-r from-[#ffffffCC] to-[#ffffff66] hover:scale-110 "
                data-aos="zoom-in"
                data-aos-offset="500"
                data-aos-duration="3000"
            >

                <img src={image} alt="" className="w-16 h-16 mx-auto rounded-full  aspect-square" data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="1500" data-aos-anchor="#other-element" />

                <div className="flex items-center gap-8 p-4">
                    <div className="flex space-x-4">
                        <div>
                            <span className="text-xs dark:text-gray-600">{days} days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">{rating}</span>
                    </div>
                </div>
                <div className="space-y-4 text-center divide-y ">
                    <div className="my-2 space-y-1 border-b border-black pb-2">
                        <h2 className="text-xl font-semibold sm:text-2xl text-purple-800">{name}</h2>
                    </div>
                </div>
                <p>
                    {des}
                </p>
            </div>
        </div>
    );
};

export default ClientCard;