import React from "react";
import data from "./../Data.js";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const Explore = () => {
  const {id} =useParams();
  const {title} =useParams();
  return (
    <div className="w-4/5 mx-auto p-4 grid md:grid-cols-2 gap-6 my-20">
      {data.map((e) => {
        return (
          <>
            {/* Card */}
            <div className="rounded-xl flex flex-col justify-end w-full relative">
              {/* Overlay */}
              <div className="absolute w-4/5 h-1/2 bg-dark opacity-90 rounded-xl text-primary pb-10">
                <p className="font-bold text-3xl px-4 pt-4">{e.title}</p>
                <div className="w-24 h-1 bg-mint mx-4 mt-1 rounded-md"/>
                <p className="px-4 py-1 text-lg">{e.description}</p>
                <Button variant="secondary" >
                  <Link to={`/schedule/${e.id}`}>
                  <p className="normal-case  text-secondary font-bold bg-mint py-2 px-4 rounded text-xl hover:scale-110">
                    Learn More
                  </p>
                </Link>
                </Button>
              </div>
              <img
                className="max-h-[500px] h-full w-full object-cover rounded-xl"
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
