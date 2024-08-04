import img from '../../assets/nicolas-horn-MTZTGvDsHFY-unsplash.jpg'
import img2 from '../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
import img3 from '../../assets/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
import img4 from '../../assets/1.jpg'


export default function OurTeam() {
    return (
        <div className="max-w-6xl mx-auto">

            <div className="flex items-end justify-between border-b-purple-500 border-b-2 pb-5 mb-8 px-4 md:px-0">
                <div>
                    <h1 className="text-[#FF6AC2] md:text-2xl">Our Team</h1>
                    <h1 className="text-xl md:text-4xl font-black ">Meet Our Expert Team</h1>
                </div>
                <button className="btn btn-outline border-[#FF6AC2] border-2 text-[#FF6AC2] rounded-full">View All Team</button>
            </div>

            <div className="flex items-center flex-col md:flex-row gap-10">
                {/* name */}
                <div className="bg-slate-60 md:w-[58%] space-y-5 ">

                    <div className="border-b-purple-500 border-b-[1.5px] pb-8 ">
                        <h3 className="uppercase text-lg text-purple-500">Designer</h3>
                        <h1 className="uppercase text-3xl md:text-4xl font-black text-[#FF6AC2CC]">Md afsar mahmud</h1>
                    </div>

                    <div className="border-b-purple-500 border-b-[1.5px] pb-8">
                        <h3 className="uppercase text-lg text-purple-500">Designer</h3>
                        <h1 className="uppercase text-3xl md:text-4xl font-black text-[#FF6AC2CC]">marianos.slater</h1>
                    </div>

                    <div className="border-b-purple-500 border-b-[1.5px] pb-8">
                        <h3 className="uppercase text-lg text-purple-500">Designer</h3>
                        <h1 className="uppercase text-3xl md:text-4xl font-black text-[#FF6AC2CC]">Kalidur rahman</h1>
                    </div>

                    <div className="border-b-purple-500 pb-8">
                        <h3 className="uppercase text-lg text-purple-500">Designer</h3>
                        <h1 className="uppercase text-3xl md:text-4xl font-black text-[#FF6AC2CC]">nasir uddin albani</h1>
                    </div>

                </div>
                {/* photo */}
                <div className="md:w-[42%] grid grid-cols-2 gap-3 px-4 md:px-0">

                    <figure><img src={img} className='rounded-2xl h-[229px] w-full ' alt="" /></figure>
                    <figure><img src={img2} className='rounded-2xl h-[229px] w-full ' alt="" /></figure>
                    <figure><img src={img3} className='rounded-2xl h-[229px] w-full ' alt="" /></figure>
                    <figure><img src={img4} className='rounded-2xl h-[229px] w-full ' alt="" /></figure>

                </div>
            </div>

        </div>
    )
}
