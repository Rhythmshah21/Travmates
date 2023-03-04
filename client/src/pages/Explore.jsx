import React from "react";
import data from "./../Data.js";

const Explore = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6 my-20">
      {data.map((e) => {
        return (
          <>
            {/* Card */}
            <div className="rounded-xl relative">
              {/* Overlay */}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">
                  {e.title}
                </p>
                <p className="px-2">{e.description}</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                 Learn More
                </button>
              </div>
              <img
                className="max-h-full md:max-h-[200px] w-full object-cover rounded-xl"
                src={e.image}
                alt="/"
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Explore;
