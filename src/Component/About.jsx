import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="text-center min-h-[50vh]  flex flex-col justify-center items-center bg-[url('/bg-about.jpg')]">
      <h1 className="text-4xl font-bold mb-4 text-green-600">About Us</h1>
      <p className="max-w-[1100px] mx-auto mb-4">
        Sartin Alloys Pvt. Ltd. (SAPL) was founded with a vision to utilize
        untapped by-products and transform them into valuable chemical products.
        Our cutting-edge manufacturing facility is located in the Choudwar
        Industrial Estate, Odisha, providing us with strategic advantages in
        terms of raw material access and logistics. With a strong emphasis on
        innovation and sustainability, we aim to set new standards in the
        chemical manufacturing industry. Our long-term partnership with Paradip
        Phosphates Ltd. ensures a steady supply of high-quality raw materials,
        enabling us to maintain consistent production levels.
      </p>
      <Link to="/about">
        <Button gradientMonochrome="success">Know More</Button>
      </Link>
    </div>
  );
};

export default About;
