import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Logo2 from "../../assets/Logo/Logo2.png"; // Replace with your actual logo image path
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full flex justify-center items-center bg-black text-white">
      <div className="max-w-screen-2xl bg-neutral-900 container  p-4 rounded-md mx-2 mb-2">
        <div className="flex flex-wrap justify-between">
          {/* Logo or Branding */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <img src={Logo2} alt="Logo" className="w-24 h-auto mb-4" />
            <p className="text-gray-400">Music for Every Mood with Less-Ego</p>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/0640373089"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://www.facebook.com/lesego.mhlongo.3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/lesego-mhlongo-081a82228"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Download
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2 text-gray-400">123 Music St, Melody City</p>
            <p className="mb-2 text-gray-400">lesegoMhlongo78@gmail.com</p>
            <p className="mb-2 text-gray-400">+27 64 037 3089</p>
            {/* Mail Icon */}
            <a
              href="mailto:lesegomhlongo78@gmail.com"
              className="text-white hover:text-gray-300"
            >
              <GrMail size={24} className="inline-block mr-2" />
              Email Us
            </a>
          </div>
        </div>
        {/* Copyright and Legal */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Your Music App. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
