import React from "react";
import { Link, useParams } from "react-router-dom";


const TravMates = () => {
  const {id} = useParams();
  return (
    <div className="w-4/5 mx-auto">
    <div className="text-center pt-44 pb-16 ">
      <h1 className="text-4xl">
        <b>UPCOMING TOURS</b>
      </h1>
    </div>
    <div className="h-0.5  bg-gray-300">
         </div>
    <div className="flex justify-between">
        <div>
        <p className="pt-8 text-2xl font-medium">Jaipur Tour</p>
        <p className="pt-2">The Pink City, Rajasthan</p>
        </div>
        <div className="pt-4">
       <Link to={`/attraction/${id}`}> <button class="bg-black text-white w-36 h-12 rounded-2xl mt-8 hover:bg-red-900 font-poppins">Find Mates</button></Link>
        </div>
        
    </div>
    <div className="h-0.5  bg-gray-300 mt-12">
         </div>
    </div>
  );
};

export default TravMates;
