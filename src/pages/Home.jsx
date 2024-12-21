import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const images = [
    "/images/bg-1.jpg",
    "/images/bg-2.jpg",
    "/images/bg-3.jpg",
    "/images/bg-4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  const navigate = useNavigate();
  return (
    <>
      <main
        className="relative h-screen flex justify-around items-center flex-col lg:flex-row "
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          height: "530px",
        }}
      >
        <div className="absolute inset-0 bg-blue-200 opacity-60 z-0"></div>

        <div className="flex flex-wrap flex-col justify-center items-center gap-2 text-center z-10 ">
          <h1 className="text-5xl font-semibold text-blue-500">
            The Easiest Way to Find
          </h1>
          <h1 className="text-4xl font-semibold text-gray-700">
            Doctors Near You
          </h1>
          <p className="text-gray-700 text-md font-semibold">
            Finding good healthcare has never been easier, we help you connect
            with top doctors in your area.
          </p>
          <div className="p-1">
            <button
              className="bg-blue-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-white drop-shadow-2xl cursor-pointer"
              onClick={() => navigate("/categories")}
            >
              Get Started
            </button>
            <Link
              className="bg-transparent border-blue-300 border-2 pt-2 pb-2 pl-6 pr-6 rounded-full text-gray-800 drop-shadow-2xl cursor-pointer ml-4 font-semibold "
              to="https://github.com/191946777?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="z-10 ">
          <div className="bg-blue-300 w-56 h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="/images/doctor-home.png"
              alt="Doctor"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
