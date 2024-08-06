import { GiPaintBucket } from "react-icons/gi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div className="relative">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between border-4 border-white gap-4 md:gap-10 p-6 md:p-14 bg-gradient-to-r from-purple-500 to-[#FF6AC2] md:px-40 text-white absolute left-[9%] md:left-[15%] -mt-[80px] rounded-tr-3xl rounded-bl-3xl">

                <div className="space-y-1">
                    <h1 className="text-xl md:text-3xl font-bold">Join Our Newsletter</h1>
                    <p className="opacity-75 hidden md:block">Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                </div>

                <div>
                    <div className="join">
                        <input className="input join-item  md:w-72 text-black focus:outline-none" placeholder="Email" />
                        <button className="btn join-item bg-[#FF6AC2] border-0 text-white hover:bg-purple-500 hover:text-black">Subscribe</button>
                    </div>
                </div>

            </div>


            <footer className="footer py-12 pt-24 md:pt-32 px-20 bg-gradient-to-r from-purple-500 to-[#FF6AC2] *:text-white  ">
                <aside className="">
                    <div className="flex items-center">
                        <p className="text-2xl text-[#40F8FF]"><GiPaintBucket /></p>
                        <h2 className="md:text-xl font-bold">
                            Paint<span className="text-[#40F8FF]">S</span>tation</h2>
                    </div>
                    <p className="opacity-70">© All rights reserved by PaintStation</p>
                </aside>
                <nav>
                    <h6 className="text-white font-black text-lg uppercase">Contract us</h6>
                    <p className="flex items-center gap-1 text-lg"><HiPhoneMissedCall />+01722877040</p>
                    <p className="flex items-center gap-1 text-lg"><MdEmail />PaintStation@gmail.com</p>
                </nav>
                <nav className="flex flex-col space-y-4">
                    <h2 className="font-medium">Community</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                        <a href="https://discord.com/invite/J9gYfbH3" target="_blank" className="hover:underline">Discord</a>
                        <a href="https://x.com/MDAFSARX" target="_blank" className="hover:underline">Twitter</a>
                        <a href="https://www.youtube.com/channel/UCfokMm6sYTLAP1_071QLrEA" target="_blank" className="hover:underline">YouTube</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;