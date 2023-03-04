import React from "react";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className=" bg-cover bg-fixed">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/images6/Travel-HD-Wallpaper-Free-download.jpg"
            className="w-full h-screen a z-0 "
          />
        </div>
        <div className=" z-20 ">
          <p className="absolute text-white text-8xl text-center top-2/3 w-full font-bold font-poppins">
            LET'S TRAVEL!
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-3 gap-0">
          <div className="bg-[#C84869] py-8">
            <p className="text-center text-4xl font-semibold  text-white font-playfair">
              CONNECT
            </p>
            <p className="text-center my-2 mx-auto text-white italic font-medium text-xl font-playfair tracking-wider">
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
        <div className="h-[150px]">
          <div className="p-12">
            <p className="text-center text-2xl italic">
              “Life mein jitna bhi try karo, kuch na kuch toh chootega hi.
              Isiliye yahin, isi pal ka mazza lete hai.”
            </p>
            <p className="text-center text-2xl italic ">
              
              “Isliye main udna chahta hun, daudna chahta hun, girna bhi chahta
              hun. Bas, rukna nahi chahta.”
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 bg-blue-700 flex flex-col items-center ">
            <h1 className="text-center text-4xl font-bold  text-white font-poppins align-middle pt-44">
              LET'S FIND YOUR{" "}
            </h1>
            <h1 className="text-center text-4xl font-bold  text-white font-poppins align-middle">
              TRAVEL BUDDY!!!
            </h1>
            <button class="bg-red-600 text-white w-36 h-12 rounded-full mt-8 hover:bg-red-900 ">
              Read more{" "}
            </button>
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/84770f_6d8f65290fd8480282082b66ac697efa~mv2_d_8688_5792_s_4_2.jpeg/v1/fill/w_1141,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6d8f65290fd8480282082b66ac697efa~mv2_d_8688_5792_s_4_2.jpeg"
              alt="hands"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
