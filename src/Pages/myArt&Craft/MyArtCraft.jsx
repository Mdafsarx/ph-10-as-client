import Empty from "./Empty";
import MyCraft from "./MyCraft";
import { useContext, useEffect, useState } from "react";
import { AuthCOntext } from "../../Auth/AuthProvider";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet-async";
// import axios from "axios";

const MyArtCraft = () => {
    const { user } = useContext(AuthCOntext)
    const [Data, setData] = useState([]);
    const [Reload, SetReload] = useState(false);
    const [loading,setLoading]=useState(true)
    const axiosSecure=useAxios()

    useEffect(() => {

        // axios.get(`https://ph-10-as-server.vercel.app/ArtCraft/${user?.email}`,{withCredentials:true})
            axiosSecure.get(`/ArtCraft/${user?.email}`)
            .then(data => {
                setData(data.data);
                    setLoading(false)
            })

    }, [Reload])
    
    console.log(Data)

    const handlePrice=()=>{
        const sortedData = [...Data].sort((a, b) => {
            const aPrice = parseInt(a.price);
            const bPrice = parseInt(b.price);
            return bPrice - aPrice;
          });
          setData(sortedData);
    }

    function handleRating(){
        const sortedData = [...Data].sort((a, b) => {
            const aRating = parseInt(a.rating);
            const bRating = parseInt(b.rating);
            return bRating - aRating;
          });
          setData(sortedData);
    }

    return (
        <div className="">
             <Helmet>
               <title>PaintStation | My Art-Craft</title>
            </Helmet>


            {
                !loading ? 
                
                Data?.length === 0 ?
                
                <Empty text={'You have not added anything to the my Art&Craft'}/> :

                        <div className="bg-gray-800 px-4 pb-24">

                            <div className="max-w-7xl mx-auto py-20 space-y-7">
                                {/* title */}
                                <div className="flex items-center justify-between">
                                    <h1 className="text-3xl font-black text-[#FF6AC2]" data-aos="fade-right" data-aos-duration="2000">My Art&craft ({Data.length} items)</h1>

                                    <div className="dropdown dropdown-left dropdown-end" data-aos="fade-left"  data-aos-duration="2000">
                                        <div tabIndex={0} role="button" className="btn m-1 font-bold bg-[#FF6AC2] text-white border-0 hover:bg-purple-500 hover:text-black">Sort</div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-auto">
                                            <li className="font-bold cursor-pointer" onClick={handlePrice}>Price</li>
                                            <li className="font-bold cursor-pointer" onClick={handleRating}>Rating</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {
                                        Data?.map(data => <MyCraft key={data._id} data={data} Reload={Reload} SetReload={SetReload} />)
                                    }
                                </div>


                            </div>

                        </div>

                    :
                    <div className="flex justify-center items-center h-[60vh]"><span className="loading loading-bars loading-lg size-20"></span></div>
            }


          




        </div>
    );
};

export default MyArtCraft;