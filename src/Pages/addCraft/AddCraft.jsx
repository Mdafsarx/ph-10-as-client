import axios from "axios";
import img from "../../assets/files-and-folder-78.png"
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthCOntext } from "../../Auth/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddCraft = () => {
    const { user } = useContext(AuthCOntext);
  async  function addCraft (e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processing = e.target.processing.value;
        const subcategory = e.target.subcategory.value;
        const stock = e.target.stock.value;
        let image = e.target.fileInput.files[0]
        const formData=new FormData();
        formData.append('image',image)
        const {data}=await axios.post('https://api.imgbb.com/1/upload?key=52396a4930fb920fb80bbebb2b3fe41d',formData)
        
        console.log(data.data)
        const Item = e.target.Item.value;
        const Data = { name, email, description, price, rating, customization, processing, subcategory, stock, image:data.data.display_url, Item }
        axios.post('https://ph-10-as-server.vercel.app/ArtCraft', Data)
            .then(data => {
                if (data.data.insertedId) {
                    toast.success('Craft added successful');
                    e.target.reset()
                }
            })

    }


    return (
        <div >
            <Helmet>
                <title>PaintStation | Add-Craft</title>
            </Helmet>
            <section className="p-20 bg-gray-800 text-gray-50 pb-36">
                <form onSubmit={addCraft} className="container flex flex-col mx-auto space-y-12" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <img src={img} alt="" />
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">

                            <div className="col-span-full sm:col-span-3 ">
                                <label className="text-sm uppercase">name</label>
                                <input id="name" type="text" placeholder="Name" value={user?.displayName} className="w-full rounded-md text-black  pl-1" required />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm uppercase">email</label>
                                <input type="email" name="email" placeholder="Email" value={user?.email} className="w-full rounded-md text-black   pl-1" required />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="email" className="text-sm uppercase">short description</label>
                                <input id="description" type="text" placeholder="Short description" className="w-full rounded-md text-black pl-1 " required />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="address" className="text-sm uppercase">price</label>
                                <input id="price" type="text" placeholder="price" className="w-full rounded-md text-black pl-1 " required />
                            </div>

                            <div className="col-span-full sm:col-span-2 uppercase">
                                <label htmlFor="city" className="text-sm">rating</label>
                                <input id="rating" type="number" min={'1'} max={'5'} placeholder="Rating" className="w-full rounded-md  text-black pl-1" required />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm uppercase">customization</label>
                                <input id="customization" type="text" placeholder="Customization" className="w-full rounded-md pl-1 text-black" required />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm uppercase">processing time</label>
                                <input id="processing" type="text" placeholder='Processing time'
                                    className="w-full rounded-md text-black pl-1 " required />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm uppercase">subcategory Name</label>
                                <input id="subcategory" type="text" placeholder="Subcategory" className="w-full rounded-md text-black pl-1 " required />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm uppercase">stockStatus</label>
                                <input id="stock" type="text" placeholder="StockStatus" className="w-full rounded-md text-black pl-1 " required />
                            </div>

                            <div className="space-y-0.5 text-sm col-span-full sm:col-span-2">

                                <label className="block ">Photo url</label>
                                <input type="file" name="fileInput" className="file-input  file-input-xs w-full max-w-xs text-black" />

                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm uppercase">ITEM NAME</label>
                                <input id="Item" type="text" placeholder="Item name" className="w-full rounded-md text-black pl-1 " required />
                            </div>

                            <div className=" col-span-full">
                                <button className="btn btn-block bg-[#FF6AC2] border-0 text-white hover:bg-purple-500 hover:text-black">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddCraft;