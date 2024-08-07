

import { useEffect, useState } from "react";
import img from "../../assets/undraw_Add_files_re_v09g.png"
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";



const UpdateRoute = () => {
    const { id } = useParams()
    const [Data, setData] = useState([]);
    const { description, price, rating, customization, processing, subcategory, stock, Item, _id } = Data || {}
    

    useEffect(() => {
        axios.get(`https://ph-10-as-server.vercel.app/ArtCraft/email/${id}`)
            .then(data => {
                setData(data.data)
            })
    }, [])

    async function handleUpdate(e) {
        e.preventDefault();
        const description = e.target.description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processing = e.target.processing.value;
        const subcategory = e.target.subcategory.value;
        const stock = e.target.stock.value;
        const image = e.target.fileInput.files[0];
        const Item = e.target.Item.value;
        const formData = new FormData()
        formData.append('image', image)
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, formData)
        const DATA = { description, price, rating, customization, processing, subcategory, stock, image:data?.data?.display_url, Item }
        axios.put(`https://ph-10-as-server.vercel.app/art/${_id}`, DATA)
            //  axios.put(`http://localhost:3000/art/${_id}`,data)
            .then(data => {
                if (data.data.modifiedCount === 1) {
                    toast.success('Updated successful')
                }
                e.target.reset()
            })
            .catch(error=>{
                toast.error(error.message)
            })

    }


    return (
        <div >
            <div>
                <section className="md:p-20 bg-gray-800 text-gray-50 ">
                    <form className="container flex flex-col mx-auto space-y-12 pb-20" onSubmit={handleUpdate} data-aos="zoom-in" data-aos-duration="3000" >
                        <fieldset className="grid grid-cols-4 gap-6 p-6 md:rounded-2xl shadow-sm bg-gray-900 ">

                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="email" className="text-sm uppercase">short description</label>
                                    <input id="description" type="text" placeholder="Short description" className="w-full rounded-md text-black pl-1 " defaultValue={description} required />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="address" className="text-sm uppercase">price</label>
                                    <input id="price" type="text" placeholder="price" className="w-full rounded-md text-black pl-1 " defaultValue={price} required />
                                </div>

                                <div className="col-span-full sm:col-span-2 uppercase">
                                    <label htmlFor="city" className="text-sm">rating</label>
                                    <input id="rating" type="text" placeholder="Rating" className="w-full rounded-md  text-black pl-1" defaultValue={rating} required />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="state" className="text-sm uppercase">customization</label>
                                    <input id="customization" type="text" placeholder="Customization" className="w-full rounded-md pl-1 text-black" defaultValue={customization} required />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-sm uppercase">processing time</label>
                                    <input id="processing" type="text" placeholder='Processing time'
                                        className="w-full rounded-md text-black pl-1 " defaultValue={processing} required />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-sm uppercase">subcategory_Name</label>
                                    <input id="subcategory" type="text" placeholder="Subcategory" className="w-full rounded-md text-black pl-1 " defaultValue={subcategory} required />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-sm uppercase">stockStatus</label>
                                    <input id="stock" type="text" placeholder="StockStatus" className="w-full rounded-md text-black pl-1 " defaultValue={stock} required />
                                </div>

                                <div className="space-y-0.5 text-sm col-span-full sm:col-span-2">
                                    <label className="block pb-0.5 ">Photo url</label>
                                    <input type="file" name="fileInput" className="file-input  file-input-xs w-full max-w-sm text-black" />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label className="text-sm uppercase">ITEM NAME</label>
                                    <input id="Item" type="text" placeholder="Item name" className="w-full rounded-md text-black pl-1 " required defaultValue={Item} />
                                </div>

                                <div className=" col-span-full">
                                    <button className="btn btn-block bg-[#FF6AC2] border-0 text-white hover:bg-purple-500 hover:text-black">
                                        Update
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2 col-span-full hidden md:flex lg:col-span-1">
                                <img src={img} alt="" />
                            </div>

                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateRoute;
