// Footer.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">About DoctorSheet</h3>
            <p className="text-sm">
              DoctorSheet helps you find the best doctors near you. Our goal is
              to make healthcare easy and accessible for everyone.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/categories" className="hover:underline">
              Categories
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-600 pt-2">
          <div className="flex justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} DocterSheet. All rights
              reserved.
            </p>

            <div className="flex space-x-4">
              <Link
                tLink="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </Link>
              <Link
                to="https://github.com/191946777?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </Link>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
