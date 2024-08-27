import React from 'react'
import BannerImg from './../components/images/Bannar.png'
import Container from '../components/Container';
import Button from '../components/Button';


const Home = () => {
    
  return (
    <div className="py-[96px] bg-[#F5F7FA] flex">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[64px] font-semibold leading-[74px] max-w-[657px] text-secondary">
              Lessons and insights{" "}
              <span className="text-primary">from 8 years</span>
            </h1>
            <p className="text-4 font-normal leading-[24px] text-para mt-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="max-w-[128px] mt-[32px]">
              <Button
                name="Register"
                className="hover:bg-white hover:border hover:border-primary duration-[0.4s] hover:text-primary"
              />
            </div>
          </div>
          <div>
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home