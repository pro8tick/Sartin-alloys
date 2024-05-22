import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const clients = [
  {
    image: "/client-Borosil-Logo.jpg",
    title: "Borosil",
  },
  {
    image: "/seraflux.png",
    title: "Seraflux",
  },
  {
    image: "/client-piramal.png",
    title: "Piramil",
  },
  {
    image: "/client-bangle.webp",
    title: "Ferozabad Bangle Industry",
  },
];

const Client = () => {
  return (
    <div class="p-6 relative w-full h-100 z-10   gap-6 bg-[#b6fae0]">
      <div class="text-center">
        <h1 className="text-4xl font-bold my-4 text-green-600 ">Clients</h1>
      </div>

      <div class="flex flex-wrap gap-10 justify-center mt-20">
        {clients.slice(0, 4).map((post) => (
          <div
            className={`group relative w-[25vw] overflow-hidden rounded-lg  transition-all`}
          >
            <img
              src={post.image}
              alt="post cover"
              className="mx-auto  transition-all duration-300 z-20 bg-transparent object-cover my-auto"
            />
            <div className="py-3 text-center gap-1">
              <p className="text-lg text-[#2f3a2e] font-semibold line-clamp-2">
                {post.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
