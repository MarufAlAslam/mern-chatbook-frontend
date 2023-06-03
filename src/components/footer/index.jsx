import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer py-10 bg-black">
      <div className="max-w-7xl text-center mx-auto">
        <div className="flex justify-center items-center gap-10 mb-8">
          <a href="/" className="text-white">
            <FaFacebook />
          </a>
          <a href="/" className="text-white">
            <FaInstagram />
          </a>
          <a href="/" className="text-white">
            <FaTwitter />
          </a>
          <a href="/" className="text-white">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-white">
          &copy; 2021 <span className="text-yellow-600">Dating</span> - All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
