import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsTOnDisplay = () => {
      if (window.innerWidth >= 1024 || window.innerWidth >= 768) {
        setCardsToShow(projectsData.length + 1);
      } else {
        setCardsToShow(1); // 1 card on small screens
      }
    };
    updateCardsTOnDisplay(); // Call the function to set initial value
    window.addEventListener("resize", updateCardsTOnDisplay); // Add event listener for window resize
    return () => {
      window.removeEventListener("resize", updateCardsTOnDisplay); // Clean up event listener on component unmount
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 my-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light text-blue-500 ">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Dreams-Explore Our Portfolio.
      </p>

      {/* Project Slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-[10px]">
                    {project.price} <span className="px-1">|</span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Slider buttons  */}
        <div className="flex justify-end items-center -mt-4">
          <button
            className="cursor-pointer p-3 bg-gray-200 rounded mr-2"
            aria-label="previous Project"
            onClick={() => handlePrev()}
          >
            <img src={assets.left_arrow} alt="previous" />
          </button>

          <button
            className="cursor-pointer p-3 bg-gray-200 rounded mr-2"
            aria-label="Next Project"
            onClick={() => handleNext()}
          >
            <img src={assets.right_arrow} alt="Next" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
