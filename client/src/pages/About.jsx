import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users"
      )
      .then(data=>{
        setData(data);
        console.log(data);
      })
  }, []);

  return <div className="my-9"></div>;
};

export default About;
