import { FcDocument } from "react-icons/fc";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FcVideoCall } from "react-icons/fc";




const ContractUs = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-7 my-20">

            <div className="text-center">
                <h3 className="text-xl" data-aos="fade-right"  data-aos-duration="3000"   data-aos-delay="1000" >Find Answers To All Your Questions</h3>
                <h1 className="text-4xl font-bold"  data-aos="fade-left"  data-aos-duration="3000"   data-aos-delay="1000" >GOT A PROBLEM?</h1>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 justify-center">

                {/* doc */}
                <div className="flex gap-3"  data-aos="zoom-out-up"  data-aos-duration="3000"   data-aos-delay="2000" >
                    <figure>
                        <FcDocument className="text-6xl"/>
                    </figure>
                    <div>
                        <h2 className="text-2xl  text-purple-500">Detailed Document</h2>
                        <p>
                            Our documentation is as <br />thorough as possible. Each <br />templates option is detailed and <br /> easy to follow
                        </p>
                    </div>
                </div>


                {/* support */}
                <div className="flex gap-3" data-aos="zoom-out-up"  data-aos-duration="3000"   data-aos-delay="2000">
                    <figure>
                        <MdOutlineSupportAgent className="text-6xl"/>
                    </figure>
                    <div>
                        <h2 className="text-2xl  text-purple-500">Premium Support</h2>
                        <p>
                        We offer a dedicated & friendly <br />support, We will try to reply as <br />fast as we can. Will be in touch.<br /> good luck
                        </p>
                    </div>
                </div>


                {/* video */}
                <div className="flex gap-3" data-aos="zoom-out-up"  data-aos-duration="3000"   data-aos-delay="2000">
                    <figure>
                        <FcVideoCall className="text-6xl"/>
                    </figure>
                    <div>
                        <h2 className="text-2xl  text-purple-500">Video Tutorials</h2>
                        <p>
                        Watch our video tutorials, step by <br />step instructions to set up the<br />Template.We have separated <br /> with video tutorials.
                        </p>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default ContractUs;