import { GiPaintBucket } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { HiPhoneMissedCall } from "react-icons/hi";



const Footer = () => {
    return (
        <footer className="footer py-12 px-20 bg-gradient-to-r from-[#AF57F3CC] to-[#FF6AC28C] *:text-white  ">
            <aside className="">
            <div className="flex items-center">
                    <p className="text-2xl text-[#40F8FF]"><GiPaintBucket /></p>
                    <h2 className="md:text-xl font-bold">
                        Paint<span className="text-[#40F8FF]">S</span>tation</h2>
                </div>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <h6 className="text-white font-black text-lg uppercase">Contract us</h6>
                <p>Don’t Hesite To Conatct <br />
                     With Us Feel Free When <br /> You Talk With Us</p>
                     <p className="flex items-center gap-1 text-lg"><HiPhoneMissedCall />+01722877040</p>
            </nav>
            <nav className="space-y-2">
            <h6 className="text-white font-black text-lg uppercase">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/Mdafsarx" target="_blank"><BsGithub className="text-2xl" /></a>
                    <a href="https://www.youtube.com/channel/UCfokMm6sYTLAP1_071QLrEA" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a href="https://web.facebook.com/profile.php?id=61554716528686&.id=61554716528686&_rdc=1&_rdr" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </nav>

        </footer>
    );
};

export default Footer;