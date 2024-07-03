import React from "react";
import logo from "../asstes/logolight.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#020043]   w-11/12 mx-auto  max-w-7xl   text-white py-8 lg:py-16">
      <div className="     lg:px-4 xl:px-0">
        <div className="  grid grid-cols-2 lg:grid-cols-4 gap-8 space-y-8  w-full ">
          <div className="">
            <img src={logo} alt="Logo" className="mb-4 w-24 lg:w-32" />
            <div className="mb-4">
              <p>123 Main Street Anytown, USA</p>
              <p>Postal Code: 12345</p>
            </div>
            <div>
              <p>123 Main Street Anytown, USA</p>
              <p>Postal Code: 12345</p>
              <p>(Available: 10:00am to 07:00pm)</p>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Success Stories</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Scheduling</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Patient Portal</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="text-xl hover:text-gray-400 transition duration-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-xl hover:text-gray-400 transition duration-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="text-xl hover:text-gray-400 transition duration-300" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="text-xl hover:text-gray-400 transition duration-300" />
              </a>
            </div>
            <p>&copy; Docplus {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
