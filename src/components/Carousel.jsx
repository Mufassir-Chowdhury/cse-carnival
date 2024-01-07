import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import Banner from './Banner';


const images = [
    {
        link: '/image/banner/bannerHome.png',
    },
    {
        link: '/image/banner/bannerHackathon.jpg',
    },
    {
        link: '/image/banner/bannerHackathon.jpg',
    },
]
const bgURL = {
  "/image/banner/bannerCodeBattle.jpg": "bg-[url('/image/banner/bannerCodeBattle.jpg')]",
  "/image/banner/bannerHackathon.jpg": "bg-[url('/image/banner/bannerHackathon.jpg')]",
  "/image/banner/bannerHome.png": "bg-[url('/image/banner/bannerHome.png')]",
}

const Carousel = () => {
  const sliderRef = React.useRef(null);

    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  
    const handleNext = () => {
      sliderRef.current.slickNext();
    };
  
    const handlePrev = () => {
      sliderRef.current.slickPrev();
    };

    useEffect(() => {
        const timer = setInterval(() => {
          handleNext();
        }, 3000);
      
        return () => clearInterval(timer);
      }, []);
  
    return (
      <div>
        <Slider {...settings} className="py-2" ref={sliderRef}>
          {images.map((image) => (
            <Banner key={image.link} link={image.link} />
          ))}
        </Slider>
        <div className="flex justify-center">
          <div className="arrow-row flex gap-4">
            <NextArrow onClick={handlePrev} />
            <PrevArrow onClick={handleNext} />
          </div>
        </div>
      </div>
    );
  };
  
const NextArrow = ({ onClick }) => {
    return (
        <button className="slick-arrow next-arrow" onClick={onClick}>
            {/* Your custom Next Arrow icon (e.g., right arrow) */}
            <img src="/image/arrow/left.svg" alt="left arrow" className="h-8" />
        </button>
    );
};

NextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};
  
  const PrevArrow = ({ onClick }) => {
    return (
      <button className="slick-arrow prev-arrow" onClick={onClick}>
        {/* Your custom Prev Arrow icon (e.g., left arrow) */}
        <img src="/image/arrow/right.svg" alt="left arrow" className="h-8" />
      </button>
    );
  };

PrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};
  
  export default Carousel;