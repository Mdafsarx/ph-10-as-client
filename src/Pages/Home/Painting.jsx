import img from "../../assets/alp-ancel-WKQt_X-SKFI-unsplash.jpg"
import img2 from "../../assets/a.jpg"
import img3 from "../../assets/cartoon.jpg"
import img4 from "../../assets/cartoon2.jpg"

const Painting = () => {
    return (
        <div className="max-w-6xl mx-auto pt-20 px-5 md:px-0">

            <div>
                <h1 className="text-xl font-bold text-[#FF6AC2]">The Best Gifts</h1>
                <h2 className="text-3xl font-bold text-purple-500">Our Awesome Paintings</h2>
                <p className="pt-1 hidden md:flex">Embrace the colors of serenity, where every brushstroke tells a story of <br /> tranquility and the beauty found in the quiet moments of life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">

                <figure className="bg-[#FF6AC280] rounded-2xl p-4 hover:bg-[#FF6AC2CC]">
                    <img src={img} alt="" className="rounded-2xl w-96 h-72" />
                </figure>
                <figure className="bg-[#FF6AC280] rounded-2xl p-4 hover:bg-[#FF6AC2CC]">
                    <img src={img3} alt="" className="rounded-2xl w-96 h-72" />
                </figure>
                <figure className="bg-[#FF6AC280] rounded-2xl p-4 hover:bg-[#FF6AC2CC]">
                    <img src={img4} alt="" className="rounded-2xl w-96 h-72" />
                </figure>
                <figure className="bg-[#FF6AC280] rounded-2xl p-4 hover:bg-[#FF6AC2CC]">
                    <img src={'/aw.webp'} alt="" className="rounded-2xl w-96 h-72" />
                </figure>
                <figure className="bg-[#FF6AC280] rounded-2xl p-4 hover:bg-[#FF6AC2CC]">
                    <img src={'/Ac.jpg'} alt="" className="rounded-2xl w-96 h-72" />
                </figure>
                <figure className="bg-[#FF6AC280] rounded-2xl p-4 hover:bg-[#FF6AC2CC]">
                    <img src={img2} alt="" className="rounded-2xl w-96 h-72" />
                </figure>

            </div>

        </div>
    );
};

export default Painting;