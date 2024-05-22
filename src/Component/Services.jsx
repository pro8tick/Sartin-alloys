import React from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

const services = [
  {
    image: "/service-glass.jpg",
    title: "Opaque Glass Manufacturing",
    content:
      "Sodium Fluoro Silicate is a key component in the production of opaque glass, such as bangles.",
  },
  {
    image: "/service-fluxes.webp",
    title: "Metal Fluxes",
    content:
      "Our product is used in the creation of metal fluxes, which are essential in metal processing.",
  },
  {
    image: "/service-rubber.webp",
    title: "Rubber Flocculation",
    content:
      "Sodium Fluoro Silicate is used in the flocculation process in the rubber industry.",
  },
  {
    image: "/service-flouridation.webp",
    title: "Water Fluoridation",
    content:
      "Our product is also utilized in the fluoridation of water, contributing to improved public health.",
  },
  {
    image: "/service-glass",
    title: "Customized Chemical Solutions",
    content:
      "Tailored chemical solutions to meet the specific needs of our clients.",
  },
  {
    image: "/service-glass",
    title: "Technical Consultancy",
    content:
      "Expert advice and support for setting up chemical manufacturing plants, ensuring optimal operations and compliance with industry standards.",
  },
  {
    image: "/service-glass",
    title: "Integrated Production and Sales",
    content:
      "Collaboration with glass mosaic factories to integrate production and sales, ensuring seamless operations and high-quality output.",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center  pb-10 relative  z-10 min-h-[100vh] bg-[#faf5f5] ">
      <h1 className="text-4xl font-bold my-4 text-green-600">Services</h1>
      <div className="flex flex-wrap gap-10 justify-center z-10 bg-[#faf5f5] ">
        {services.slice(0, 4).map((service) => (
          <PostCard key={service._id} post={service} />
        ))}
      </div>

      <div className="z-10">
        <Link
          to={"/search"}
          className="text-lg text-teal-500 hover:underline text-center z-10"
        >
          View all Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
