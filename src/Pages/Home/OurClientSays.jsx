/* eslint-disable react/no-unescaped-entities */
import ClientCard from "./ClientCard";
import img1 from '../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
import img2 from '../../assets/nicolas-horn-MTZTGvDsHFY-unsplash.jpg'
import img3 from '../../assets/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
import img4 from '../../assets/bad-boys-dp-for-whatsapp-hd-1.webp'

const OurClientSays = () => {
    return (
        <div className="space-y-10 py-10">

            <div className="bg-[url('/aw.webp')] bg-no-repeat bg-cover min-h-screen w-full bg-fixed">

                <div className="bg-gradient-to-r from-[#000000CC] to-[#00000066] min-h-screen flex flex-col justify-center gap-10 p-4 py-8 relative">

                    <div className="text-center">
                        <h1 className="text-3xl font-bold uppercase font-serif text-white">What do they say about us 💌</h1>
                        <p className="text-white text-balance">we pride ourselves on delivering exceptional, personalized art pieces  that capture <br /> the essence of our clients' visions.Here’s what some of our satisfied customers have to say about their experiences:</p>
                    </div>
                    
                    <div className="absolute top-[55%] " ></div>

                    <div className=" flex flex-col md:flex-row gap-8 justify-center items-center">
                        <ClientCard image={img1} des={'I recently commissioned a portrait of my family, and I am absolutely thrilled with the result! The artist captured every detail beautifully, from the expressions on our faces to the texture of our clothing. '}
                            days={'5'} rating={'4.9'} name={'Michael B'}
                        />
                        <ClientCard image={img2} des={'I hired this artist to create a custom landscape painting of our favorite vacation spot, and the result is stunning. The use of light and shadow gives the piece a realistic and ethereal quality.'}
                            days={'4'} rating={'3.5'} name={'Rased'}
                        />
                        <ClientCard image={img3} des={"I can't say enough good things about the pet portrait I received! It perfectly captures the personality of my golden retriever, Max.  "}
                            days={'10'} rating={'5.00'} name={'Afzal mahmud'}
                        />
                        <ClientCard image={img4} des={'I ordered an abstract art piece for my office, and it has completely transformed the space. The bold colors and dynamic shapes add energy and vibrancy to the room.'}
                            days={'1'} rating={'4.00'} name={'Safwan'}
                        />

                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurClientSays;