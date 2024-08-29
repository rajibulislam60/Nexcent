import React from 'react'
import BannerImg1 from './../components/images/Bannar.png'
import BannerImg2 from "./../components/images/Feature.png";
import BannerImg3 from "./../components/images/pana.png";
import Container from '../components/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannar from '../components/Bannar';
import Slider from 'react-slick';

const sliderSettings = {
  dots: true, 
  infinite: true,
  speed: 500, 
  slidesToShow: 1, 
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 4000, 
  pauseOnHover: true, 
  arrows: false, 
};


const Home = () => {
    
  return (
    <div className="py-[96px] bg-[#F5F7FA] flex" id='home'>
      <Container>
        <div className="banner-slider">
          <Slider {...sliderSettings}>
            <Bannar src={BannerImg1} />
            <Bannar src={BannerImg2} />
            <Bannar src={BannerImg3} />
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Home