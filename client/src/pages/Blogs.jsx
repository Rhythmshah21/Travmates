import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [scale, setscale] = useState(false);
  const [loading, setLoading] = useState(false);
  const useAppstate = useContext(Appstate);
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Exploring the Hidden Gems of Tokyo",
      content:
        "Tokyo is a vibrant city with countless sights and sounds to explore. However, there are also many hidden gems that are off the beaten path. In this blog post, we'll share some of the best hidden parks, local restaurants, and unique experiences to have in Tokyo. For example, you can visit the beautiful and serene Shinjuku Gyoen National Garden, or try some delicious and authentic Japanese street food at the Tsukiji Outer Market. We'll also provide tips for getting around the city and avoiding the crowds.",
      image: "/images/hiddengems.jpeg",
    },
    {
      id: 2,
      title: "Hiking in the Swiss Alps",
      content:
        "The Swiss Alps are a hiker's paradise, with stunning views and challenging trails. In this blog post, we'll share some of the best hikes in the Swiss Alps, including the Haute Route and the Matterhorn. We'll also provide tips for planning your trip, such as what gear to bring and where to stay. Additionally, we'll recommend some lesser-known trails for those who want to avoid the crowds and experience the beauty of the Alps in solitude.",
      image: "/images/Swiss.jpeg",
    },
    {
      id: 3,
      title: "Finding Adventure in Costa Rica",
      content:
        "Costa Rica is a beautiful country with diverse landscapes and plenty of adventure opportunities. In this blog post, we'll share some of the best adventures to have in Costa Rica, from zip-lining through the jungle to surfing on the Pacific coast. We'll also provide tips for planning your trip, including the best time to visit and what to pack. Furthermore, we'll recommend some off-the-beaten-path activities for those who want to explore the country beyond the usual tourist hotspots.",
      image: "/images/Costa.jpeg",
    },
    {
      id: 4,
      title: "A Road Trip Through the American Southwest",
      content:
        "The American Southwest is a vast and diverse region with stunning natural beauty and fascinating history. In this blog post, we'll share some of the best road trip routes through the Southwest, such as the iconic Route 66 and the scenic Pacific Coast Highway. We'll also recommend some unique stops along the way, such as the ancient cliff dwellings at Mesa Verde National Park or the quirky roadside attractions of the Mojave Desert.",
      image: "images/Southwest.jpeg",
    },
    {
      id: 5,
      title: "Cruising the Mediterranean",
      content:
        "A Mediterranean cruise is a luxurious way to see some of the world's most beautiful destinations, from Italy to Greece to Spain. In this blog post, we'll provide an overview of what to expect on a Mediterranean cruise, including the best time to go and what to pack. We'll also highlight some of the most popular ports of call, such as the ancient city of Rome or the stunning Greek island of Santorini.",
      image: "/images/Manarola.jpeg",
    },
    {
      id: 6,
      title: "Sailing the Caribbean",
      content:
        "The Caribbean is a popular destination for sailing enthusiasts, with crystal-clear waters and plenty of secluded coves to explore. In this blog post, we'll share tips for planning your Caribbean sailing trip, including what type of boat to rent and what to pack. We'll also recommend some of the best islands to visit, such as the vibrant and colorful St. Lucia or the secluded and serene British Virgin Islands",
      image: "/images/Carribean.jpeg",
    },
  ];

  return (
    <section class="text-gray-400 bg-gray-900 font-playflair z-0 p-24">
      <div class="container px-5 mx-auto gap-y-20">
        <div class="flex flex-wrap justify-center">
          {blogs.map((blogs) => {
            return (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 2 }}
                key={blogs.id}
                class="p-4 lg:w-1/2"
              >
                <div class="h-full bg-gray-800 shadow-xl bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <img
                    src={blogs.image}
                    className="w-[652px] h-[360px] p-4"
                  ></img>
                  <h2 class="tracking-widest text-md title-font font-medium text-gray-500 mb-1">
                    {blogs.title}
                  </h2>
                  {/* <img src={data.image_link} alt="default" className="mx-auto p-3"/> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    {data.name}
                  </h1>
                  <p class="leading-relaxed mb-3">{blogs.content}</p>

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
    </section>
  );
};

export default Blogs;
