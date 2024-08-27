import React from "react";
import Container from "./Container";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";
import { TbFidgetSpinner } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import CountUp from "react-countup";

const CountArea = () => {
  return (
    <div className="bg-[#F5F7FA] py-[64px]">
      <Container>
        <div className="flex items-center">
          <div className=" w-[55%]">
            <h2 className="text-[36px] font-semibold leading-[44px] text-secondary w-[380px]">
              Helping a local{" "}
              <span className="text-primary">business reinvent itself</span>
            </h2>
            <p className="text-4 font-normal leading-[24px] text-para mt-4">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="flex justify-between w-[45%]">
            <div>
              <div className="flex gap-2 items-center">
                <IoPersonSharp className="text-primary text-[48px]" />
                <div>
                  <CountUp
                    end={2245341}
                    duration={5}
                    className="text-[28px] font-bold leading-[36px] text-secondary"
                  />
                  <p className="text-4 font-normal leading-[24px] text-para mt-1">
                    Members
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-[40px]">
                <MdOutlineTouchApp className="text-primary text-[48px]" />
                <div>
                  <CountUp
                    end={828867}
                    duration={5}
                    className="text-[28px] font-bold leading-[36px] text-secondary"
                  />
                  <p className="text-4 font-normal leading-[24px] text-para mt-1">
                    Event Bookings
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <TbFidgetSpinner className="text-primary text-[48px]" />
                <div>
                  <CountUp
                    end={46328}
                    duration={5}
                    className="text-[28px] font-bold leading-[36px] text-secondary"
                  />
                  <p className="text-4 font-normal leading-[24px] text-para mt-1">
                    Clubs
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-[40px]">
                <MdOutlinePayment className="text-primary text-[48px]" />
                <div>
                  <CountUp
                    end={1926436}
                    duration={5}
                    className="text-[28px] font-bold leading-[36px] text-secondary"
                  />
                  <p className="text-4 font-normal leading-[24px] text-para mt-1">
                    Payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountArea;
