import React from "react";

const About = () => {
  return (
    <>
      <div className="relative inline-block w-full bg-blue-500">
        <img
          className="h-72 w-full object-cover block opacity-50"
          src="/images/doctor-about-us.jpg"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center text-3xl font-semibold text-white">
            About Us
          </h1>
          <p className="text-center sm:text-lg mt-5 text-white font-semibold font-poppins">
            At DocterSheet, we make finding the right doctor easy. Our mission
            is to help everyone get quick and reliable access to healthcare by
            connecting patients with trusted doctors near them.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 -mt-2 flex items-center justify-around sm:h-60">
        <div className="w-1/2">
          <h1 className="text-blue-600 text-3xl font-semibold  text-center lg:text-start ">
            MISSION
          </h1>
          <p className="sm:w-1/2 mt-5 font-poppins text-center lg:text-start ">
            We are committed to making healthcare more accessible. With
            DocterSheet, we aim to provide up-to-date, accurate information so
            you can feel confident in finding the right doctor for you.
          </p>
        </div>

        <img className="w-40 hidden lg:block" src="/images/mission-about.png" />
      </div>

      <div className="bg-blue-500 flex flex-row-reverse items-center justify-around sm:h-60">
        <div className=" sm:w-1/2 ">
          <h1 className="text-white text-3xl font-semibold text-center lg:text-start lg:ml-56">
            VISION
          </h1>
          <p className="sm:w-1/2 mt-5 font-poppins text-center lg:text-start text-white lg:ml-56">
            Our vision is to become the leading platform for connecting patients
            with trusted doctors worldwide, making quality healthcare accessible
            to all, no matter where they are.
          </p>
        </div>
        <img className="w-40 hidden lg:block" src="/images/vision-about.png " />
      </div>

      <div className="bg-gray-100 flex flex-col  items-center justify-center pb-5 pt-5">
        <h1 className="font-poppins text-xl font-medium text-blue-800 mb-5">
          Why We Are Here
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-5">
          <div className="bg-blue-400 w-40 items-center justify-center flex flex-col rounded-sm">
            <img className="w-20 mt-4" src="/images/Solution-hand.png" />
            <h3 className="font-poppins text-center mb-4">
              Need Based Solutions
            </h3>
          </div>
          <div className="bg-blue-400 w-40 items-center justify-center flex flex-col rounded-sm">
            <img className="w-20 mt-4" src="/images/problem-solving.png" />
            <h3 className="font-poppins text-center mb-4">
              Personalised Solution
            </h3>
          </div>
          <div className="bg-blue-400 w-40 items-center justify-center flex flex-col rounded-sm">
            <img className="w-20 mt-4" src="/images/helping-hand.png" />
            <h3 className="font-poppins text-center mb-4">
              Fill Need
              <br /> Gap
            </h3>
          </div>
          <div className="bg-blue-400 w-40 items-center justify-center flex flex-col rounded-sm">
            <img className="w-20 mt-4" src="/images/choice-hand.png" />
            <h3 className="font-poppins text-center mb-4 ">
              Options <br />
              Available
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
