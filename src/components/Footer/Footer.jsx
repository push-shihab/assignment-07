import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo-xl.png";
import insta from "../../../public/assets/instagram.png";
import fb from "../../../public/assets/facebook.png";
import x from "../../../public/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 pt-15 border-b border-gray-700 pb-8">
          <Image src={logo} alt="logo" loading="eager"></Image>
          <p className="text-[#ddd]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <span className="text-white font-medium text-[20px]">
            Social Links
          </span>
          <div className="flex items-center justify-center gap-2">
            <Image src={insta} alt="Instagram"></Image>
            <Image src={fb} alt="Facebook"></Image>
            <Image src={x} alt="Twitter"></Image>
          </div>
        </div>
        <div className="py-8 text-[#b4b4b4] flex flex-wrap justify-between items-center">
          <span>© 2026 KeenKeeper. All rights reserved.</span>
          <span className="flex gap-8 flex-wrap">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
