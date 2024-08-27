import React from "react";
import Container from "../components/Container";
import ClogoImg1 from "./../components/images/Clogo1.png";
import ClogoImg2 from "./../components/images/Clogo2.png";
import ClogoImg3 from "./../components/images/Clogo3.png";
import ClogoImg4 from "./../components/images/Clogo4.png";
import ClogoImg5 from "./../components/images/Clogo5.png";
import ClogoImg6 from "./../components/images/Clogo6.png";
import TestimonialImg from "./../components/images/testimonial.png"
import { FaArrowRightLong } from "react-icons/fa6";

import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <div id="testimonial" className="py-[33px] bg-[#F5F7FA]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="max-w-[45%] mx-auto">
            <img src={TestimonialImg} alt="Testimonial Image" />
          </div>
          <div className="max-w-[55%]">
            <p className="text-4 font-normal leading-[24px] text-para">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h4 className="text-[20px] font-semibold leading-[24px] text-primary mt-4">
              Tim Smith
            </h4>
            <p className="text-4 font-normal leading-[24px] text-para mt-4">
              British Dragon Boat Racing Association
            </p>
            <div className="flex items-center">
              <div className="w-[70%]">
                <Marquee>
                  <div className="gap-[40px] flex py-[25px]">
                    <img src={ClogoImg1} alt="Client logo" />
                    <img src={ClogoImg2} alt="Client logo" />
                    <img src={ClogoImg3} alt="Client logo" />
                    <img src={ClogoImg4} alt="Client logo" />
                    <img src={ClogoImg5} alt="Client logo" />
                    <img src={ClogoImg6} alt="Client logo" />
                  </div>
                </Marquee>
              </div>
              <div className="text-primary flex items-center gap-2">
                <h5 className="text-5 font-semibold leading-[28px]">
                  Meet all customers
                </h5>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
