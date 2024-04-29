import axios from "axios";
import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AllArtCraft = () => {


    const [allData, setData] = useState([])
    useEffect(() => {
        axios.get('https://ph-10-as-server.vercel.app/ArtCraft')
            .then(data => {
                setData(data.data)
            })
    }, []);
    const navLink = useNavigate()
    const viewDetails = (id) => {
        navLink(`/details/${id}`)
    }

    return (
        <div className="max-w-7xl mx-auto md:py-20">
            <div>
                <table className="table border-2 border-black">
                    {/* head */}
                    <thead className="bg-black text-white">
                        <tr >
                            <th className="hidden md:flex"></th>
                            <th>User name</th>
                            <th className="hidden md:flex">Item name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData?.map((Data, i) =>
                                <tr key={i}>
                                    <td className="hidden md:flex">
                                        <div className="flex items-center gap-7">
                                            <div className="w-full">
                                                <img src={Data?.Image} className="w-full h-60  rounded-2xl" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-xl font-bold">
                                            {Data?.name}
                                        </p>
                                    </td>
                                    <td className=" items-center">
                                        <p className="text-xl font-bold">
                                            {Data?.Item}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-xl font-bold">
                                            {Data?.price}$
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-xl font-bold flex items-center">
                                            {Data?.rating}<FcRating />
                                        </p>
                                    </td>
                                    <td>
                                        <button className="btn bg-[#40F8FF]" onClick={() => {

                                            viewDetails(Data?._id)
                                        }}>Details</button>
                                    </td>
                                </tr>)
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllArtCraft;