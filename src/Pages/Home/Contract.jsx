/* eslint-disable react/no-unescaped-entities */
export default function Contract() {
    return (
        <div className="max-w-6xl mx-auto py-20 space-y-20">

            {/* title for contract */}
            <div className="text-center">
                <h3 className="text-xl" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="1000" >Find Answers To All Your Questions</h3>
                <h1 className="text-4xl font-bold" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="1000" >GOT A PROBLEM?</h1>
            </div>


            <div className="flex items-center gap-20">

                <div className="w-[60%]">

                    <section className="flex justify-center">

                        <form className="container flex flex-col space-y-12 ">

                            <fieldset>
                                <div className="grid grid-cols-6 gap-10 col-span-full lg:col-span-3 ">

                                    <div className="col-span-full sm:col-span-3 space-y-3">
                                        <label htmlFor="firstname" className="text-sm font-bold">First name</label>
                                        <input id="firstname" type="text" className="w-full border-purple-500 border-b p-1" />
                                    </div>

                                    <div className="col-span-full sm:col-span-3 space-y-3">
                                        <label htmlFor="lastname" className="text-sm font-bold">Last name</label>
                                        <input id="lastname" type="text" className="w-full border-purple-500 border-b p-1" />
                                    </div>

                                    <div className="col-span-full sm:col-span-3 space-y-3">
                                        <label className="text-sm font-bold">Email</label>
                                        <input id="email" type="email" className="w-full border-purple-500 border-b p-1" />
                                    </div>

                                    <div className="col-span-full sm:col-span-3 space-y-3">
                                        <label className="text-sm font-bold">Phone Number</label>
                                        <input id="number" type="text" className="w-full border-purple-500 border-b p-1" />
                                    </div>

                                    <div className="col-span-full space-y-4">
                                        <label htmlFor="address" className="text-sm font-bold">Message</label>
                                        <input type="text" className="w-full border-purple-500 border-b p-1" />
                                    </div>

                                    <div className="col-span-full">
                                        <button className="btn btn-block bg-purple-500 text-white hover:bg-[#40F8FF] hover:text-black border-0">Let's Talk</button>
                                    </div>

                                </div>
                            </fieldset>

                        </form>

                    </section>

                </div>

                <div className="border-l-2 border-purple-500 w-[40%] pl-5 h-96">

                    <div>
                        <h1 className="text-xl font-bold">Contract Us</h1>
                    </div>

                </div>

            </div>

        </div>
    )
}
