import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

const quotesData = [
  {
    id: 1,
    name: 'John Doe',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://placekitten.com/100/100', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://placekitten.com/100/100', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Jane Smith',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://placekitten.com/100/100', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Jane Smith',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://placekitten.com/100/100', // Replace with actual image URL
  },
  // Add more quotes as needed
];



const Words = () => {
  const sliderRef = React.useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setSlidesToShow(1);
        } else if (window.innerWidth <= 1120) {
          setSlidesToShow(2);
        } else {
          setSlidesToShow(3);
        }
      };
    
      window.addEventListener('resize', handleResize);
      handleResize(); // Call the function initially to set the state based on the initial window size
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
    };

  
    const handleNext = () => {
      sliderRef.current.slickNext();
    };
  
    const handlePrev = () => {
      sliderRef.current.slickPrev();
    };
  
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-6 text-navbar-button-hover">Few Words From...</h1>
        <Slider {...settings} className="py-6" ref={sliderRef}>
          {quotesData.map((quote) => (
            <div key={quote.id} className="flex-shrink-0 px-3 w-1/3" >
              <div className="bg-card-body p-4 rounded-lg w-full h-96 ">
                <img src={quote.imageUrl} alt={quote.name} className="w-24 rounded-2xl mx-auto mb-4" />
                <h2 className="text-lg font-semibold mb-2 text-navbar-button">{quote.name}</h2>
                <p className="text-navbar font-semibold">{quote.quote}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center">
          <div className="arrow-row flex gap-6">
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
        <img src="/image/arrow/left.svg" alt="left arrow" className="" />
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
        <img src="/image/arrow/right.svg" alt="left arrow" className="" />
      </button>
    );
  };
  PrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};
  
  export default Words;