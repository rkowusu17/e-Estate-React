import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const access_key = import.meta.env.VITE_ACCESS_KEY; // Access key from .env file

    formData.append("access_key", access_key); // Append access key to form data

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message); // Alert the user with the error message
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Contact{" "}
        <span
          className="underline underline-offset-4 decoration-1 font-light
        text-blue-500 "
        >
          Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Let's get in touch! We are here to help you with all your property
        needs. Whether you have questions, need assistance, or want to explore.
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            <label htmlFor="Name">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              id="Name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <label htmlFor="Email">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              id="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-12 py-2 mb-10 rounded cursor-pointer hover:bg-blue-700 transition duration-200">
          {" "}
          {result ? result : "Send Us a Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
