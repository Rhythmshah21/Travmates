import React from "react";
import { Link, useParams } from "react-router-dom";


const TravMates = () => {
  const {id} = useParams();
  return (
    <div className="w-4/5 mx-auto">
    <div className="text-center pt-44 pb-16 ">
      <h1 className="text-4xl">
        <b>TRAVEL BUDDIES</b>
      </h1>
    </div>
    <div className="h-0.5  bg-gray-300">
         </div>
    <div className="flex justify-between">
        <div>
        <p className="pt-8 text-2xl font-medium">RHYTHM</p>
        <p className="pt-2">Mumbai,Maharastra</p>
        </div>
        <div className="pt-4">
       <Link to={"/userinfo"}> <button class="bg-black text-white w-36 h-12 rounded-2xl mt-8 hover:bg-red-900 font-poppins">CONNECT</button></Link>
        </div>
        
    </div>
    
    <div className="h-0.5  bg-gray-300 mt-12">
         </div>
         <button class="w-full bg-mint text-black py-3 md:py-4 px-7 md:px-10 text-lg mt-8 hover:bg-blue-800 font-montserrat font-semibold hover:text-mint">
              FAMOUS TOURIST SPOTS
            </button>
    </div>
    
  );
};

export default TravMates;
