import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const values = [
  {
    image: "/excellence.png",
    title: "Excellence",
  },
  {
    image: "/innovation.png",
    title: "Innovation",
  },
  {
    image: "/Integrity.png",
    title: "Integrity",
  },
  {
    image: "/sustainability.png",
    title: "Sustainability",
  },
];

const Values = () => {
  return (
    <div>
      <div className="h-[300vh] -mt-[100vh]  -mb-[100vh] z-0">
        <div className="sticky top-0 h-[100vh]  ">
          <img
            src="sustainability.avif"
            alt="Photo 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="p-6 relative w-full h-auto z-10 -mt-[200vh]  gap-6 bg-[#1d13107a] text-white">
        <div class=" text-center">
          <h1 className="text-4xl font-bold my-4 text-green-400 ">Values</h1>
        </div>
        <div className="text-center my-5 gap-1">
          <p>
            We embrace new technologies and processes to stay at the forefront
            of the industry.
          </p>
          <p>
            We are committed to eco-friendly practices, ensuring minimal
            environmental impact while maximizing resource utilization.
          </p>
        </div>
        <div class="flex flex-wrap gap-10 justify-center mt-20 bg-transparent ">
          {values.slice(0, 4).map((post) => (
            <motion.div
              variants={fadeIn("up", "spring", 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              className={`group relative w-[20vw] overflow-hidden rounded-lg  transition-all`}
            >
              <img
                src={post.image}
                alt="post cover"
                className="mx-auto h-[50%] transition-all duration-300 z-20 bg-transparent"
              />
              <div className="py-3 text-center gap-1">
                <p className="text-lg text-white font-semibold line-clamp-2">
                  {post.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center gap-1">
          <p>
            We maintain transparency, honesty, and ethical standards in all our
            business dealings.
          </p>
          <p>
            We strive for the highest standards in product quality, customer
            service, and operational efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
