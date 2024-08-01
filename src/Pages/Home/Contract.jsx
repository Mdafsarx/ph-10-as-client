import { BiPhone } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Swal from "sweetalert2";

/* eslint-disable react/no-unescaped-entities */
export default function Contract() {

    const handleSubmit=(e)=>{
      e.preventDefault();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "We will contact you soon ",
        showConfirmButton: false,
        timer: 1500
      });
      e.target.reset()
    }
    




    return (
        <div className="max-w-6xl mx-auto py-20 space-y-14">

            {/* title for contract */}
            <div className="text-center">
                <h3 className="text-xl" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="1000" >Find Answers To All Your Questions</h3>
                <h1 className="text-4xl font-bold" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="1000" >GOT A PROBLEM?</h1>
            </div>


            <div className="flex items-center flex-col-reverse md:flex-row gap-1 md:gap-20">

                <div className="md:w-[60%]">

                    <section className="flex justify-center">

                        <form onSubmit={handleSubmit} className="container flex flex-col space-y-12 ">

                            <fieldset>
                                <div className="grid grid-cols-6 gap-8 col-span-full lg:col-span-3 ">

                                    <div className="col-span-full sm:col-span-3 space-y-3">
                                        <label htmlFor="firstname" className="text-sm font-bold">First name</label>
                                        <input id="firstname" type="text" className="w-full border-purple-500 border-b p-1" required />
                                    </div>

                                    <div className="col-span-full sm:col-span-3 space-y-3">
                                        <label htmlFor="lastname" className="text-sm font-bold">Last name</label>
                                        <input id="lastname" type="text" className="w-full border-purple-500 border-b p-1" required/>
                                    </div>

                                    <div className="col-span-full sm:col-span-3 space-y-3">
                                        <label className="text-sm font-bold">Email</label>
                                        <input id="email" type="email" className="w-full border-purple-500 border-b p-1" required/>
                                    </div>

                                    <div className="col-span-full sm:col-span-3 space-y-3">
                                        <label className="text-sm font-bold">Phone Number</label>
                                        <input id="number" type="text" className="w-full border-purple-500 border-b p-1" required/>
                                    </div>

                                    <div className="col-span-full space-y-4">
                                        <label htmlFor="address" className="text-sm font-bold">Message</label>
                                        <textarea className="w-full border-purple-500 border-b p-1" required></textarea>
                                    </div>

                                    <div className="col-span-full">
                                        <button type="submit" className="btn btn-block bg-purple-500 text-white hover:bg-[#40F8FF] hover:text-black border-0">Let's Talk</button>
                                    </div>

                                </div>
                            </fieldset>

                        </form>

                    </section>

                </div>

                <div className="md:border-l-[6px] border-[#A855F799] md:w-[40%] md:pl-5 h-96">

                    <div>
                        <h1 className="text-xl font-bold mb-6 mt-4">Contract Us</h1>

                        <div className="flex  my-7 gap-3 ">
                            <div>
                                <p className="bg-[#A855F726] p-1 rounded-full"><CiLocationOn className="text-2xl text-[#A855F7]" /></p>
                            </div>
                            <div>
                                <h1 className="text-base font-bold">Location</h1>
                                <p className="text-gray-500 opacity-80">Sylhet, Bangladesh</p>
                            </div>
                        </div>

                        <div className="flex  my-7 gap-3 ">
                            <div>
                                <p className="bg-[#A855F726] p-1 rounded-full"><BiPhone className="text-2xl text-[#A855F7]" /></p>
                            </div>
                            <div>
                                <h1 className="text-base font-bold">Contact</h1>
                                <p className="text-gray-500 opacity-80">Phone:+01722877040</p>
                            </div>
                        </div>

                        <div className="flex  my-7 gap-3 ">
                            <div>
                                <p className="bg-[#A855F726] p-1.5 rounded-full"><TfiEmail className="text-xl text-[#A855F7]" /></p>
                            </div>
                            <div>
                                <h1 className="text-base font-bold">Email</h1>
                                <p className="text-gray-500 opacity-80">Mail:mdafsar.dev@gmail.com</p>
                            </div>
                        </div>

                        {/* social site */}
                        <div className="flex items-center gap-3">
                            <div>
                                <p className="bg-[#0065F733] p-2 rounded-full"><FaFacebook className="text-2xl text-[#0065F7]" /></p>
                            </div>
                            <div>
                                <p className="bg-[#1F232833] p-2 rounded-full"><BsGithub className="text-2xl text-[#1F2328]" /></p>
                            </div>
                            <div>
                                <p className="bg-[#0A66C233] p-2 rounded-full"><BsLinkedin className="text-2xl text-[#0A66C2]" /></p>
                            </div>
                            <div>
                                <p className="bg-[#00000033] p-2 rounded-full"><BsTwitterX className="text-xl text-[#000000]" /></p>
                            </div>
                            <div>
                                <p className="bg-[#FF000033] p-2 rounded-full"><BsYoutube className="text-xl text-[#FF0000]" /></p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
