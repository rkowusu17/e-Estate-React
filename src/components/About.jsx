import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl text-center mb-2md:text-[64px] font-semibold">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light text-blue-500 ">
          Our Brand
        </span>
      </h1>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mb-8">
        We are a team of dedicated individuals passionate about providing the
        best Property and housing service possible. Our mission is to create a
        seamless experience for our customers, ensuring that every interaction
        is positive and memorable.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="brand-image"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="w-full grid grid-cols-2 gap-6 md:gap-10 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects completed </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects </p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            e-Estate is one of the prestigious and trusted housing agencies in
            the country with amazing numbers and satisfying services. Choose
            eEstate for a reliable and professional experience in finding your
            dream property. Our team is committed to excellence and innovation,
            ensuring that we meet the evolving needs of our clients.
          </p>
          <button className="bg-blue-500 text-white px-8 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
