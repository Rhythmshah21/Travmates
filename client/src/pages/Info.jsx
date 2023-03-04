import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Info = () => {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Age: "",
    Dateofbirth: "",
    City: "",
    State: "",
    Country: "",
    Description: "",
  });
  const [Loading, setLoading] = useState(false);

  return (
    <div className="font-montserrat my-20 ">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-red-600">
              INFO
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-red-400">
                    FirstName
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.FirstName}
                    onChange={(e) =>
                      setForm({ ...form, FirstName: e.target.value })
                    }
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-red-600">
                   LastName
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.LastName}
                    onChange={(e) => setForm({ ...form, LastName: e.target.value })}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
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
                    value={form.Gender}
                    onChange={(e) =>
                      setForm({ ...form, Gender: e.target.value })
                    }
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
                    value={form.Dateofbirth}
                    onChange={(e) =>
                      setForm({ ...form, Dateofbirth: e.target.value })
                    }
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
                    value={form.Age}
                    onChange={(e) =>
                      setForm({ ...form, Age: e.target.value })
                    }
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
                    value={form.City}
                    onChange={(e) =>
                      setForm({ ...form, City: e.target.value })
                    }
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
                    value={form.State}
                    onChange={(e) =>
                      setForm({ ...form, State: e.target.value })
                    }
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
                    value={form.Country}
                    onChange={(e) =>
                      setForm({ ...form, Country: e.target.value })
                    }
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
                    value={form.Description}
                    onChange={(e) =>
                      setForm({ ...form, Description: e.target.value })
                    }
                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-sm shadow-white"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                  {Loading ? (
                    <TailSpin height={25} color="white" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
