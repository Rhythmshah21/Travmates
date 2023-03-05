import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const TravMates = () => {
  const {id} = useParams();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      setProfile(response.data);
    })
  },[]);
  const [interested, setInteresed] = useState(false);
  console.log('User_Profile',profile);

  return (
    <div className="w-4/5 mx-auto py-16">
    <div className="text-center py-16 ">
      <h1 className="text-6xl text-dark font-playfair font-semibold">
        <b>Find Your TravMates</b>
      </h1>
    </div>
    
    <div className="h-0.5  bg-dark/30">
    </div>
    {profile.map((profileData) => (
    <div className=" w-4/5 flex justify-between mx-auto">
        <div>
          (interested && profileData)
          <p className="pt-8 text-2xl font-medium">{profileData.firstName}</p>
          <p className="pt-2">{profileData.city}</p>
        </div>
        <div className=" pt-10">
        <Link to={`/attraction/${id}`}> 
          <button class="flex mx-auto text-secondary bg-mint border-0 py-2 px-6 focus:outline-none hover:bg-secondary/60 hover:text-mint font-medium rounded text-lg items-center text-center " >
            Connect
          </button>
        </Link>
        </div>
        
    </div>
    
    ))}
    <div className="h-0.5  bg-dark/30 mt-12">
    </div>
    
    </div>
  );
};

export default TravMates;
