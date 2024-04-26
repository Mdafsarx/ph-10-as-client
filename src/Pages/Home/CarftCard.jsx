const Card = ({ item }) => {
    const { imgUrl , cost , name} = item || {}
    return (
        <div>
            <div className="md:p-6 rounded-md shadow-md border-2 border-gray-300">
                <img src={imgUrl} className="object-cover md:object-center w-full rounded-md h-full md:h-72 " />
                <div className="mt-6 mb-2 text-center space-y-2">
                    <p className="text-xl font-bold border-b-2 pb-1 border-black">{cost}</p>
                    <p className="text-base ">{name}</p>
                    {/* rating */}

                    <div className="rating hidden md:block ">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <button className="text-base font-bold text-[#FF6868] hover:underline">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;