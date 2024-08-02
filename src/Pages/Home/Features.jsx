import { BiBrain } from "react-icons/bi";
import { GiPriceTag, GiTeamIdea } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";

const Features = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-5 md:gap-10 justify-center pb-14 border-b-2 border-[#A855F7] mb-14 md:mb-16">

            <div className="flex items-center gap-1.5 bg-[#A855F766] p-4 rounded-full hover:bg-[#A855F7B3]">
                <p className="bg-white p-1.5 rounded-full"><BiBrain className="text-4xl text-purple-500"/></p>
                <h3 className="text-2xl font-bold">Smart Work</h3>
            </div>

            <div className="flex items-center gap-1.5 bg-[#A855F766] p-4 rounded-full hover:bg-[#A855F7B3]">
                <p className="bg-white p-1.5 rounded-full"><MdDesignServices className="text-4xl text-purple-500"/></p>
                <h3 className="text-2xl font-bold">Unique Design</h3>
            </div>

            <div className="flex items-center gap-1.5 bg-[#A855F766] p-4 rounded-full hover:bg-[#A855F7B3]">
                <p className="bg-white p-1.5 rounded-full"><GiTeamIdea className="text-4xl text-purple-500"/></p>
                <h3 className="text-2xl font-bold">Skilled Team</h3>
            </div>

            <div className="flex items-center gap-1.5 bg-[#A855F766] p-4 rounded-full hover:bg-[#A855F7B3]">
                <p className="bg-white p-1.5 rounded-full"><GiPriceTag className="text-4xl text-purple-500"/></p>
                <h3 className="text-2xl font-bold">Best Pricing</h3>
            </div>
            
        </div>
    );
};

export default Features;