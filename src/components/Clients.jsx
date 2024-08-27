import React from "react";
import Container from "./Container";
import ClogoImg1 from "./images/Clogo1.png";
import ClogoImg2 from "./images/Clogo2.png";
import ClogoImg3 from "./images/Clogo3.png";
import ClogoImg4 from "./images/Clogo4.png";
import ClogoImg5 from "./images/Clogo5.png";
import ClogoImg6 from "./images/Clogo6.png";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div>
      <Container>
        <div className="py-10">
          <div className="mx-auto text-center">
            <h2 className="text-[48px] font-semibold leading-[64px] text-secondary">
              Our Clients
            </h2>
            <p className="text-4 font-normal leading-[24px] text-para mt-4">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <div className=" mt-4">
            <Marquee>
              <div className="gap-[136px] flex py-[25px]">
                <img src={ClogoImg1} alt="Client logo" />
                <img src={ClogoImg2} alt="Client logo" />
                <img src={ClogoImg3} alt="Client logo" />
                <img src={ClogoImg4} alt="Client logo" />
                <img src={ClogoImg5} alt="Client logo" />
                <img src={ClogoImg6} alt="Client logo" />
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Clients;
