import Empty from "./Empty";
import MyCraft from "./MyCraft";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthCOntext } from "../../Auth/AuthProvider";

const MyArtCraft = () => {
    const {user}=useContext(AuthCOntext)
    const [Data,setData]=useState([]);
    const [Reload,SetReload]=useState(false);

    useEffect(()=>{

      axios.get(`http://localhost:3000/ArtCraft/${user?.email}`)
      .then(data=>{
        setData(data.data)
      })

    },[Reload])


    return (
        <div className="">


            {
                Data?.length === 0 ? <Empty /> :

                    <div className="bg-gray-800 px-4">
                        <div className="max-w-7xl mx-auto py-20 space-y-7">
                            {/* title */}
                            <div className="flex items-center justify-between">
                                <h1 className="text-3xl font-black text-[#40F8FF]">My Art&craft ({Data.length} items)</h1>

                                <div className="dropdown dropdown-left dropdown-end">
                                    <div tabIndex={0} role="button" className="btn m-1 font-bold">Sort</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-auto">
                                        <li className="font-bold">Price</li>
                                        <li className="font-bold">Rating</li>
                                    </ul>
                                </div>
                            </div>

                            {/* cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {
                                    Data?.map(data => <MyCraft key={data._id} data={data} Reload={Reload} SetReload={SetReload}/>)
                                }
                            </div>


                        </div>

                    </div>

            }




        </div>
    );
};

export default MyArtCraft;