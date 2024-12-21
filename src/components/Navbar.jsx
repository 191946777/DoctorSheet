import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-blue-500 p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-lg">
            Doctor<span className="text-blue-200">Sheet</span>
          </Link>

          <button
            className="text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex space-x-6 text-white">
            <Link to="/" className="hover:underline font-medium">
              Home
            </Link>

            <Link to="/categories" className="hover:underline font-medium">
              Categories
            </Link>

            <Link to="/about" className="hover:underline font-medium">
              About Us
            </Link>
            <Link to="/contact" className="hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-blue-600 text-white p-4 rounded">
            <Link to="/" className="block hover:underline">
              Home
            </Link>
            <Link to="/categories" className="block hover:underline">
              Categories
            </Link>

            <Link to="/about" className="block hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="block hover:underline">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
