import { useLoaderData } from "react-router-dom";
import Empty from "./Empty";
import MyCraft from "./MyCraft";

const MyArtCraft = () => {
    const loadedData = useLoaderData();


    return (
        <div className="">


            {
                loadedData.length === 0 ? <Empty /> :

                    <div className="bg-gray-800 px-4">
                        <div className="max-w-7xl mx-auto py-20 space-y-7">
                            {/* title */}
                            <div className="flex items-center justify-between">
                                <h1 className="text-3xl font-black text-[#40F8FF]">My Art&craft ({loadedData.length} items)</h1>

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
                                    loadedData?.map(data => <MyCraft key={data._id} data={data} />)
                                }
                            </div>


                        </div>

                    </div>

            }




        </div>
    );
};

export default MyArtCraft;