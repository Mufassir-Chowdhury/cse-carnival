import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { quotesData } from '../data/data';




const Words = () => {
  const sliderRef = React.useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1120) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
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
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 3000,
  };


  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-6 text-navbar-button-hover font-merriweather">Few Words From...</h1>
      <Slider {...settings} className="py-6" ref={sliderRef}>
        {quotesData.map((quote) => (
          <div key={quote.id} className="flex-shrink-0 px-3 w-3/5">
            <div className="bg-card-body p-8 rounded-lg w-full">
              <div className='flex flex-row mb-8 justify-left gap-2 items-center lg:h-32'>
                <img src={quote.imageUrl} alt={quote.name} className="w-32 h-32 rounded-xl" />
                <div className='text-left ml-4'>
                  <h2 className="text-lg font-semibold mb-2 text-navbar-button">{quote.name}</h2>
                  <div className=' text-navbar '>
                    <p className="font-semibold">{quote.post}</p>
                    <p className="">{quote.special}</p>
                    <p className="text-[13px]">{quote.designation}</p>
                  </div>
                </div>
              </div>
              <div className='overflow-y-auto text-navbar text-justify  whitespace-pre-line font-inter' style={{ height: '18rem' }}>
                {quote.quote}
              </div>

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