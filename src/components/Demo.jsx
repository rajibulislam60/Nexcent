import React from 'react'
import Container from './Container'
import Button from './Button';

const Demo = () => {
  return (
    <div className="py-[32px] bg-[#F5F7FA]">
      <Container>
        <div className="text-center">
          <h2 className="max-w-[830px] text-[64px] font-semibold leading-[76px] mx-auto">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="w-[178px] mx-auto mt-[32px]">
            <Button
              name="Get a Demo"
              className="hover:bg-white hover:border hover:border-primary duration-[0.4s] hover:text-primary"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Demo