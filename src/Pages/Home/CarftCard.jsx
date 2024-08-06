import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const { Image  , Item , price , _id} = item || {}
    return (
        <div >
            <div className="md:p-6 rounded-md shadow-md border-2 border-gray-300 group">
                <img src={Image} className="object-cover md:object-center w-full rounded-md  h-72 group-hover:scale-105 " />
                <div className="mt-6 mb-2 text-center space-y-2">
                    <p className="text-xl font-bold border-b-2 pb-1 border-[#FF6AC2]">{Item}</p>
                    <p className="text-base ">{price}$</p>
                    {/* rating */}

                    <div className="rating hidden md:block ">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" />
                    </div>

                    <Link className="text-base font-bold text-[#FF6AC2] hover:underline" to={`/details/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;