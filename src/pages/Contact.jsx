import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_jj46z3o", 
        "template_ckp6u5e", 
        {
          user_name: data.name,
          user_email: data.email,
          message: data.message,
        },
        "4nXY8AyJi-8Ma7T-x" 
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("Message sent successfully!");
          reset(); 
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <>
      <div className="flex items-center justify-around pt-5">
        <div>
          <h3 className="text-blue-400 font-medium">Contact With Us Now</h3>
          <h1 className="text-3xl mt-4 font-medium font-poppins">
            Feel Free To Write Our <br />
            Technology Experts
          </h1>
        </div>
        <div>
          <p className="text-gray-500 font-medium font-poppins hidden lg:block">
            At DocterSheet, we make finding the right doctor easy. Our mission
            is to <br /> help everyone get quick and reliable access to
            healthcare by <br />
            connecting patients with trusted doctors near them.
          </p>
        </div>
      </div>

      {/* Contact Form Here */}

      <div className="flex items-center justify-around mb-5 mt-5">
        <div className="map-container hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7215.82633140373!2d82.96442713112076!3d25.27350634686661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3246100ae5c9%3A0xa426bae967fcf7d6!2sChitaipur%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1732023966832!5m2!1sen!2sin"
            width="400"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className=" lg:w-1/3 ">
          {/* form will be here  */}
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="font-medium ">First Name</label>
            <input
              className="w-full border border-gray-600 p-2 mb-3 rounded"
              type="text"
              placeholder="First name"
              {...register("First name", { required: true, min: 1 })}
            />

            <label className="font-medium">Last Name</label>
            <input
              className="w-full border border-gray-600 p-2 mb-3 rounded"
              type="text"
              placeholder="Last name"
              {...register("Last name", { required: true })}
            />

            <label className="font-medium">E-mail</label>
            <input
              className="w-full border border-gray-600 p-2 mb-3 rounded"
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /@/i })}
            />

            <label className="font-medium">Your Message</label>
            <textarea
              className="w-full border border-gray-600 p-2 pb-7 mb-3 rounded"
              placeholder="Message"
              {...register("message", { min: 1, maxLength: 120 })}
            />

            <input
              className="bg-blue-500 text-white mt-5 p-2 rounded-md cursor-pointer"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
