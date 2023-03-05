import React from "react";
import {motion} from 'framer-motion';
import {Link} from "react-router-dom"



const Home = () => {
  return (
    <div className="">
      <div className="  ">
        <div  className="h-screen flex justify-center items-center bg-bgphoto bg-fixed bg-cover">
          <motion.p initial={{scale: 0}} animate={{scale:1 , y:[0,5]}} transition={{type:'tween', duration:2}} className=" text-secondary md:text-8xl lg:text-9xl text-5xl text-center top-2/3 mt-[400px] w-full font-bold font-playfair">
            LET'S TRAVEL!
          </motion.p>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-3 gap-0">
          <div className="bg-[#C84869] py-8">
            <p className="text-center text-2xl md:text-4xl font-semibold  text-white font-playfair">
              CONNECT
            </p>
            <p className="text-center my-2 mx-auto text-white font-medium text-xl md:text-2xl font-poppins ">
            The ultimate networking tool
            </p>
          </div>
          <div className="bg-[#2A70DE] py-8">
            <p className="text-center text-2xl md:text-4xl font-bold  text-white font-playfair">
              TRAVEL
            </p>
            <p className="text-center my-2 mx-auto text-white font-light text-xl md:text-2xl font-poppins">
            Travel beyond boundaries
            </p>
          </div>
          <div className="bg-[#213E8C] py-8">
           <p className="text-center text-2xl md:text-4xl font-bold  text-white font-playfair">
              EXPLORE
            </p>
            <p className="text-center my-2 mx-auto text-white font-light text-xl md:text-2xl font-poppins">
            Journey into the unknown with us
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div className="py-40  mx-auto bg-bgphoto2 bg-fixed bg-cover ">
            <p className=" text-white md:text-8xl lg:text-7xl text-5xl text-center  mt-[200x] w-full font-bold font-playfair ">
              "WANDER OFTEN, WONDER ALWAYS"
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[40%] bg-secondary flex flex-col items-center py-40 ">
            <h1 className="text-center text-3xl md:text-5xl font-bold  text-mint font-poppins p-3">
              FIND YOUR TRAVEL BUDDY!
            </h1>
            <Link to = {"/explore"}>  <button class="bg-mint text-black py-3 md:py-4 px-7 md:px-10 text-lg rounded-full mt-8 hover:bg-dark font-montserrat font-semibold hover:text-mint">
              EXPLORE
            </button></Link>
          </div>
          <div className="w-[60%] bg-cover">
            <img
              src="https://static.wixstatic.com/media/84770f_6d8f65290fd8480282082b66ac697efa~mv2_d_8688_5792_s_4_2.jpeg/v1/fill/w_1141,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6d8f65290fd8480282082b66ac697efa~mv2_d_8688_5792_s_4_2.jpeg"
              alt="hands" className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
