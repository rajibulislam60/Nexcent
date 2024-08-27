import React from "react";
import Button from "./Button";
import Container from "./Container";
import LogoImg from "./images/Logo.png";

const Navbar = () => {
  const closeMenu = () => setClick(false);

  return (
    <div className="py-[22px] bg-[#F5F7FA]">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <img src={LogoImg} alt="Navbar Logo" />
          </div>
          <div>
            <ul className="flex gap-[50px]">
              <li className="text-4 font-normal leading-[24px] text-[#18191F] hover:text-primary duration-[0.4s]">
                <a href="/" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="text-4 font-normal leading-[24px] text-[#18191F] hover:text-primary duration-[0.4s]">
                <a href="#service" onClick={closeMenu}>
                  Service
                </a>
              </li>
              <li className="text-4 font-normal leading-[24px] text-[#18191F] hover:text-primary duration-[0.4s]">
                <a href="#feature" onClick={closeMenu}>
                  Feature
                </a>
              </li>
              <li className="text-4 font-normal leading-[24px] text-[#18191F] hover:text-primary duration-[0.4s]">
                <a href="#products" onClick={closeMenu}>
                  Product
                </a>
              </li>
              <li className="text-4 font-normal leading-[24px] text-[#18191F] hover:text-primary duration-[0.4s]">
                <a href="#testimonial" onClick={closeMenu}>
                  Testimonial
                </a>
              </li>
              <li className="text-4 font-normal leading-[24px] text-[#18191F] hover:text-primary duration-[0.4s]">
                <a href="#blog" onClick={closeMenu}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button
              name="signup"
              className="hover:bg-white hover:border hover:border-primary duration-[0.4s] hover:text-primary"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
