import React from 'react'
import data from "./../Data.js";
import { Button } from "@mui/material";
import { useParams } from 'react-router-dom';

const TouristAttraction = () => {
  const { title } = useParams();
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-2 gap-6 my-20">
      {data.map((e) => {
        return (
          <>
          
            {/* Card */}
            <div className="rounded-xl flex flex-col justify-end w-full relative">
              {/* Overlay */}
              <div className="absolute w-3/5 h-1/2 bg-black opacity-90 rounded-xl text-white">
                <p className="font-bold text-2xl px-4 pt-4">{e.Tourist_locations.title}</p>
                <p className="px-4 py-1">{e.Tourist_locations.Desc}</p>
                <Button variant="secondary" size="large">
                  <p className="normal-case  text-white bg-red-900 px-2 rounded text-xl">
                    Learn More
                  </p>
                </Button>
              </div>
              <img
                className="max-h-[400px] md:max-h-[400px] h-full w-full object-cover rounded-xl"
                src={e.image}
                alt="/"
              />
            </div>
          </>
        );
      })}
    </div>
  )
}

export default TouristAttraction
