import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import {useNavigate} from "react-router-dom"

const Info = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    LastName: "",
    gender: "",
    age: "",
    date: "",
    city: "",
    state: "",
    country: "",
    message: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();
    const {firstName,LastName,gender,age,date,city,state,country,message} = user;
    const res = await fetch("/userprofile", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        firstName,LastName,gender,age,date,city,state,country,message
      })
    });
    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("profile not added ");
      console.log("profile not added ")
    }
    else {
      window.alert("profile created");
      console.log("profile created");
      navigate("/explore");
    }
  }

  const [Loading, setLoading] = useState(false);

  return (
    <div className="font-montserrat my-20 ">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-red-600">
              INFO
            </h1>
          </div>
          <form className="lg:w-1/2 md:w-2/3 mx-auto" method="POST">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-red-400">
                    FirstName
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputs}
                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-red-600">
                   LastName
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    value={user.LastName}
                    onChange={handleInputs}
                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  />
                </div>
              </div>
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label class="leading-7 text-sm text-red-600">
                    Gender
                  </label>
                  <input
                    id="gender"
                    name="gender"
                    value={user.gender}
                    onChange={handleInputs}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  ></input>
                </div>
              </div>
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label class="leading-7 text-sm text-red-600">
                   DateofBirth
                  </label>
                  <input
                  type="date"
                    id="date"
                    name="date"
                    value={user.date}
                    onChange={handleInputs}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  ></input>
                </div>
              </div>
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label for="age" class="leading-7 text-sm text-red-400">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={user.age}
                    onChange={handleInputs}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  />
                </div>
              </div>
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-red-400">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={user.city}
                    onChange={handleInputs}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  />
                </div>
              </div>
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-red-400">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={user.state}
                    onChange={handleInputs}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  />
                </div>
              </div>
              <div class="p-2 w-1/3">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-red-400">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={user.country}
                    onChange={handleInputs}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-red-600">
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={user.message}
                    onChange={handleInputs}
                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg " onClick={PostData}>
                  {Loading ? (
                    <TailSpin height={25} color="white" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Info;
