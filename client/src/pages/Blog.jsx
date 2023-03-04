import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { TailSpin, Tailspin } from "react-loader-spinner";

const Blog = () => {
  const [data, setData] = useState([]);
  const [scale, setscale] = useState(false);
  const [loading, setLoading] = useState(false);
  // const controls = useAnimationControls();
  // const { scrollYProgress } = useScroll();

  // const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => {
        setData(res.data);
      });
    setLoading(false);
  }, []);

  console.log(data);
  return (
    <section class="text-gray-400 bg-gray-900 font-playflair z-0">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center bg-gray-900">
          <TailSpin height={40} color="white" />
        </div>
      ) : (
        <>
          <div class="container px-5 mx-auto gap-y-20">
            <div class="flex flex-wrap justify-center">
              {data.map((data) => {
                return (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, y: [300,0,0,80] }}
                    transition={{ type: "spring", duration: 2 }}
                    key={data.id}
                    class="p-4 lg:w-1/2"
                  >
                    <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        {data.brand}
                      </h2>
                      {/* <img src={data.image_link} alt="default" className="mx-auto p-3"/> */}
                      <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                        {data.name}
                      </h1>
                      <p class="leading-relaxed mb-3">{data.description}</p>
                      <p class="leading-relaxed mb-3 sm:text-2xl text-xl mr-5">
                        $ {data.price}
                      </p>
                      <a
                        href={data.product_link}
                        class="text-indigo-400 inline-flex items-center"
                      >
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span class="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                          <svg
                            class="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                          <svg
                            class="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Blog;
