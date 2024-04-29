import { FcRating } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const loadedData = useLoaderData();
    const { name, email, description, price, rating, customization, processing, subcategory, stock, Image, Item } = loadedData || {};

    return (
        <div className="py-20 max-w-7xl mx-auto">
            <div className="card card-side bg-base-100 shadow-xl rounded-2xl">
  <figure className="w-1/4">
    <img src={Image} alt="Movie" className="h-96 w-full"/>
    </figure>
  <div className="card-body">
    <h2 className="text-2xl font-extrabold">{Item}</h2>
    <h2 className="text-xl"><span className=" font-bold pr-2">Email:</span>{email}</h2>
    <h2 className="text-xl"><span className=" font-bold pr-2">User Name:</span>{name}</h2>
    <h2 className="text-xl"><span className=" font-bold pr-2">Stock:</span>{stock==='true'?'Available':'Stock out'}</h2>

    <div className="flex items-center gap-4">
    <h2 className="text-xl "><span className=" font-bold pr-2">Price:</span>{price}$</h2>
    <h2 className="text-xl  flex items-center"><span className=" font-bold pr-2">Rating:</span>{rating}<FcRating/></h2>
    </div>

    <div className="flex items-center gap-4">
    <h2 className="text-xl "><span className=" font-bold pr-2">Subcategory:</span>{subcategory}</h2>
    <h2 className="text-xl "><span className=" font-bold pr-2">Rating:</span>{rating}</h2>
    </div>

    <div className="flex items-center gap-4">
    <h2 className="text-xl "><span className=" font-bold pr-2">customization:</span>{customization}</h2>
    <h2 className="text-xl "><span className=" font-bold pr-2">Processing:</span>{processing}</h2>
    </div>
     
     <p>
        {description}...
     </p>

  </div>
</div>
        </div>
    );
};

export default Details;