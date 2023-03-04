import React from "react";

const Home = () => {
  return (
    <div >
      <div className="relative">
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Travel-HD-Wallpaper-Free-download.jpg"
          className="w-full h-screen a z-0"
        />
        <div className=" z-20 ">
          <p className="absolute text-white text-8xl text-center top-2/3 w-full font-bold font-poppins">
            LET'S TRAVEL!!!!!!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-0">
          <div className="bg-[#C84869] py-8">
            <p className="text-center text-4xl font-bold  text-white font-poppins">
              CONNECT
            </p>
            <p className="text-center my-2 mx-auto text-white font-light text-2xl font-montserrat">
              Lets connect naaa
            </p>
          </div>
          <div className="bg-[#2A70DE] py-8">
          <p className="text-center text-4xl font-bold  text-white font-poppins">
              TRAVEL
            </p>
            <p className="text-center my-2 mx-auto text-white font-light text-2xl font-montserrat">
              Lets travel naaa
            </p>
          </div>
          <div className="bg-[#213E8C] py-8">
          <p className="text-center text-4xl font-bold  text-white font-poppins">
              EXPLORE
            </p>
            <p className="text-center my-2 mx-auto text-white font-light text-2xl font-montserrat">
              Lets explore naaa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;