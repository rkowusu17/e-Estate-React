import React from "react";
import { testimonialsData, assets } from "../assets/assets";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10  lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Customer{" "}
        <span
          className="underline underline-offset-4 decoration-1 font-light
        text-blue-500 "
        >
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Hear what our exisiting customers have to say. These are those who found
        home with Us
      </p>

      {/* Testimonials Slider container */}
      <div className="flex flex-wrap gap-4 justify-center w-full">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[20rem] border border-white shadow-lg px-8 py-12 text-center rounded"
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
