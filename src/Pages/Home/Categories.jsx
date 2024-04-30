import Marquee from "react-fast-marquee";
// import CategoriesCard from "./CategorieCard";
import { useEffect, useState } from "react";
import axios from "axios";


const Categories = () => {
    

    const [category,setCategory]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/Category")
        .then(data=>{
           setCategory(data.data.map(data=>data.sub))
        })
    },[])
   
    console.log(category)
    const [allData,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://ph-10-as-server.vercel.app/ArtCraft")
        .then(data=>{
           setData(data.data.map(data=>data.subcategory))
        })
    },[])
     console.log(allData)

    return (
        <div>
            <Marquee className="">
              <p className="text-5xl bg-black font-bold p-2 text-white uppercase">  When the only thing you have to worry about is how to make your art. On Golden Pond</p>
            </Marquee>

            <div className="my-20 max-w-6xl mx-auto">

                <div className="bg-[#1A1416BF]  w-full text-white p-10 rounded-2xl">
                <h1 className="text-5xl font-bold text-center pb-5">Category</h1> 
                <p className="text-3xl font-bold text-center pb-5"> <span className="text-purple-400">When the only thing you have to worry about is how to</span> <br /> <span className="text-[#FF6AC2]">make your art. On Golden Pond</span></p>

                <div className="grid grid-cols-3 gap-8">
                  
                </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;