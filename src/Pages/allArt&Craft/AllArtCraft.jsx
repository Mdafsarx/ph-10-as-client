import axios from "axios";
import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Empty from "../myArt&Craft/Empty";
import { Helmet } from "react-helmet-async";

const AllArtCraft = () => {

    const [allData, setData] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(allData)
    useEffect(() => {
        axios.get('https://ph-10-as-server.vercel.app/ArtCraft')
            .then(data => {
                setData(data.data.slice(6, data.data.length))
                setLoading(false)})} , [])
    
    const navLink = useNavigate()
    const viewDetails = (id) => {
        navLink(`/details/${id}`)
    }

    return (
        <div className="max-w-7xl mx-auto py-10 md:py-20">
             <Helmet>
               <title>PaintStation | All Art-Craft</title>
            </Helmet>

            {
                loading ?
                    <div className="flex justify-center items-center h-[60vh]"><span className="loading loading-bars loading-lg size-20"></span></div>
                    : allData.length === 0 ?
                        <Empty text={'No one has added anything here'} /> :
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
                                                            <img src={Data?.image} className="w-96 h-60  rounded-2xl" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="md:text-xl font-bold">
                                                        {Data?.name}
                                                    </p>
                                                </td>
                                                <td className=" items-center">
                                                    <p className="md:text-xl font-bold">
                                                        {Data?.Item}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="md:text-xl font-bold">
                                                        {Data?.price}$
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="md:text-xl font-bold flex items-center">
                                                        {Data?.rating}<FcRating />
                                                    </p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm bg-[#40F8FF]" onClick={() => {

                                                        viewDetails(Data?._id)
                                                    }}>Details</button>
                                                </td>
                                            </tr>)
                                    }



                                </tbody>

                            </table>
                        </div>
            }


        </div>
    );
};

export default AllArtCraft;