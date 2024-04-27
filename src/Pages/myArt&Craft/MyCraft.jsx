import { FcRating } from "react-icons/fc";


const MyCraft = ({ data }) => {
    console.log(data);
    const { name, price, rating, customization, stock, Image, Item } = data || {}
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={Image} className="px-4 md:px-0 rounded-3xl md:rounded-none h-44 md:h-56 w-56" />
                </figure>
                <div className="divider lg:divider-horizontal py-4"></div>
                <div className="p-3 md:p-1 pt-3 space-y-0.5">
                    <h2 className="card-title text-purple-500">{Item}</h2>
                    <p className="font-normal"><span className="font-bold">By:</span> {name}</p>
                    <h1><span className="font-bold">Customization: </span>{customization}</h1>
                    <h1><span className="font-bold">StockStatus: </span>{stock==='true'?'Stock':'Stock-out'}</h1>
                        <h1><span className="font-bold">Price: </span>{price}$</h1>
                        <h1 className="flex items-center"><span className="font-bold pr-1">Rating: </span> {rating} <FcRating /></h1>
                        <div className="flex items-center gap-3 pt-1">
                            <button className="btn btn-sm bg-black text-white border-0">Update</button>
                            <button className="btn btn-sm bg-black text-white border-0">Delete</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraft;