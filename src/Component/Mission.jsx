import React from "react";

const Mission = () => {
  return (
    <div>
      <div className="h-[300vh] -my-[100vh]  -mb-[50vh] ">
        <div className="sticky top-0 h-[100vh]  ">
          <img
            src="values.avif"
            alt="Value"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row p-6 relative w-full h-[100vh] z-10 -mt-[200vh]  gap-6 bg-[#1d13101c] text-white">
        <div class="text-center w-full h-auto md:w-1/2 bg-[url('/mission.avif')] object-cover">
          <h1 className="text-4xl font-bold my-4 text-green-400 ">Mission</h1>

          <div className="text-center my-5 gap-1 mx-20">
            <p>
              Our mission is to lead the chemical manufacturing sector by
              transforming untapped resources into high-value products,
              contributing to sustainable industrial practices and economic
              growth. We are dedicated to innovation, quality, and customer
              satisfaction.
            </p>
          </div>
        </div>
        <div class="text-center w-full h-auto md:w-1/2 bg-[url('/vision.avif')] object-cover ">
          <h1 className="text-4xl font-bold my-4 text-green-400 ">Vision</h1>

          <div className="text-center my-5 gap-1 mx-5">
            <p>
              We envision becoming a global leader in the production of Sodium
              Fluoro Silicate and other chemical products, known for our
              innovative solutions, high-quality standards, and commitment to
              sustainability. Our goal is to build long-lasting relationships
              with our clients by consistently meeting their needs and exceeding
              their expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
