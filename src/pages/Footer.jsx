import React from "react";
import Container from "../components/Container";
import FLogo from "./../components/images/LogoF.png";
import { FaInstagram } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="py-[64px] bg-[#263238]">
      <Container>
        <div className="flex flex-wrap justify-between">
          <div className="w-[45%] max-w-[45%]">
            <img src={FLogo} alt="Footer Logo" />
            <div className="text-[14px] font-normal leading-[20px] text-white mt-[40px]">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p className="mt-2">All rights reserved</p>
            </div>
            <div className="mt-[40px]">
              <div className="text-white text-[32px] flex gap-4">
                <FaInstagram />
                <TiSocialDribbble />
                <FaSquareTwitter />
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="w-[55%] max-w-[55%] flex">
            <div className="text-white w-[60%] max-w-[60%] flex gap-[30px] ">
              <div className="w-[50%]">
                <h3 className="text-[20px] font-semibold leading-[28px] mb-[24px]">
                  Company
                </h3>
                <ul>
                  <li className="text-[14px] leading-[20px] font-normal">
                    About us
                  </li>
                  <li className="text-[14px] leading-[20px] font-normal mt-3">
                    Blog
                  </li>
                  <li className="text-[14px] leading-[20px] font-normal mt-3">
                    Contact us
                  </li>
                  <li className="text-[14px] leading-[20px] font-normal mt-3">
                    Pricing
                  </li>
                  <li className="text-[14px] leading-[20px] font-normal mt-3">
                    Testimonials
                  </li>
                </ul>
              </div>
              <div className="w-[50%]">
                <h3 className="text-[20px] font-semibold leading-[28px] mb-[24px]">
                  Support
                </h3>
                <ul>
                  <li className="text-[14px] leading-[20px] font-normal">
                    Help center
                  </li>
                  <li className="text-[14px] leading-[20px] font-normal mt-3">
                    Terms of service
                  </li>
                  <li className="text-[14px] leading-[20px] font-normal mt-3">
                    Legal
                  </li>
                  <li className="text-[14px] leading-[20px] font-normal mt-3">
                    Privacy policy
                  </li>
                  <li className="text-[14px] leading-[20px] font-normal mt-3">
                    Status
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[40%] max-w-[40%]">
              <h3 className="text-[20px] font-semibold leading-[28px] text-white">
                Stay up to date
              </h3>
              <div className="relative mt-[24px]">
                <input
                  className="w-[255px] px-[12px] py-[10px] rounded-md text-[14px] font-normal bg-[#D9DBE1] relative"
                  type="text"
                  placeholder="Your email address"
                />
                <IoIosSend className="text-black text-[24px] absolute top-[50%] translate-y-[-50%] right-0" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
