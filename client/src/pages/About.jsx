import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     )
  //     .then(data=>{
  //       setData(data);
  //       console.log(data);
  //     })
  // }, []);

  return(
    <div class=" bg-[#8297b8] "> 
   
   <div className="h-[500px] flex justify-center items-center bg-aboutbg bg-fixed bg-contain bg-no-repeat">
          <p className=" text-mint md:text-3xl lg:text-5xl  text-center font-semibold mt-20 w-full font-playfair">
         
    Going Places
      I haven’t been everywhere,<br/> but it’s on my list
          </p>
        </div>

     
      
            <div class="p-20">
              <h2 class="text-2xl text-dark font-bold md:text-4xl font-poppins">Our team consists of experienced travel experts who have a deep understanding of different destinations and cultures. </h2>
              <p class="mt-6 text-dark font-poppins text-xl">
                Welcome to our travel company! We are a team of passionate travel enthusiasts dedicated to helping our clients create unforgettable travel experiences. Whether you're looking to explore the natural wonders of the world, immerse yourself in different cultures, or simply unwind and relax in a beautiful setting, we've got you covered. We believe that travel is more than just seeing new places - it's about connecting with new people, experiencing different ways of life, and creating memories that will last a lifetime. That's why we work hard to craft unique itineraries that cater to your interests, preferences, and budget.We pride ourselves on our attention to detail, ensuring that every aspect of your trip is carefully planned and executed to perfection.
              </p>
          
         
          </div>
      
    </div>
    );
};

export default About;
