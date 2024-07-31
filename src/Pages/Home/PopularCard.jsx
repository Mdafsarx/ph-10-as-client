const PopularCard = ({data}) => {
    return (
        <div className="">
            <div className=" bg-base-100 shadow-xl group border rounded-2xl">
                <figure className="">
                    <img src={data?.imgUrl} alt="Shoes" className="w-full h-52 group-hover:scale-90 group-hover:rounded-2xl rounded-t-2xl"/>
                </figure>
                <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p className="uppercase">{data?.name}</p>
                    <p className="font-bold ">{data?.cost}$</p>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;