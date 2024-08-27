import React from 'react';
import Container from '../components/Container';
import ProductImg from "./../components/images/Pana.png";
import Button from "../components/Button";

const Products = () => {
  return (
    <div className="py-[94px]" id="products">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <img src={ProductImg} alt="Pana Image" />
          </div>
          <div className="max-w-[55%]">
            <h2 className="text-[36px] font-semibold leading-[44px] max-w-[601px] text-secondary">
              How to design your site footer like we did
            </h2>
            <p className="text-4 font-normal leading-[24px] text-para mt-4">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <div className="w-[151px] mt-8">
              <Button name="Learn More" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Products