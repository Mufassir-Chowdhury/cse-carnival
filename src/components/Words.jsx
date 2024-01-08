import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';


const quotesData = [
  {
    id: 1,
    name: 'Md Masum',
    designation: 'Professor & Head',
    post: 'Convenor, CSE Carnival',
    department: 'Department of CSE, SUST',
    quote: `I extend a warm welcome to each and every one of you to the CSE Carnival 2024! We are thrilled to witness the unfolding of this remarkable event, where creativity, innovation, and technological prowess come together to celebrate the spirit of computer science.

    This year's carnival promises to be an exciting blend of insightful sessions, engaging competitions, innovative application development, and a melting pot of ideas.

    I encourage you to explore the diverse array of activities planned for the carnival, participate actively, and seize the chance to connect with fellow enthusiasts and showcase your talents.

    Our hope is that this event not only inspires you but also fosters a sense of community and collaboration within the vibrant CSE ecosystem.

    Thank you for being a part of this exciting journey, and I look forward to the incredible experiences and discoveries that await us at the CSE Carnival 2024!
  `,
    imageUrl: 'https://www.sust.edu/uploads/profile-images/1481514029.jpg',
  },
  {
    id: 2,
    name: 'Dr. Md Forhad Rabbi, SMIEEE',
    designation: 'Professor',
    post: 'Director, CSE Carnival',
    department: 'Department of CSE, SUST',
    quote: `Hello tech enthusiasts, 

    Prepare to ignite your circuits and unleash your creativity! CSE Society, SUST proudly presents the 2024 SUST CSE CARNIVAL – a gala celebration of innovative minds and collaborative spirit. Mark your calendars for February 16 and 17 as we transform our campus into a vibrant hub of technological wonders. The carnival promises an unparalleled journey into the heart of a digital revolution. 

    Best wishes and cheers.`,
    imageUrl: 'https://www.sust.edu/uploads/profile-images/1677521468.png',
  },
  {
    id: 3,
    name: 'M. Jahirul Islam, PhD. PEng.',
    post: 'Joint Convenor, CSE Carnival',
    designation: 'Professor',
    department: 'Department of CSE, SUST',
    quote: `My best wishes for an enriching and vibrant CSE Carnival. Your dedication to innovation and Critical thinking is truly commendable. May this event be a platform for meaningful connections, learning, and the celebration of diverse talents. Your active participation ensures the success of this carnival, and I wish you all an inspiring and enjoyable carnival.`,
    imageUrl: 'https://www.sust.edu/uploads/profile-images/1464455450.jpg',
  },

  {
    id: 4,
    name: 'Mohammad Shahidur Rahman, PhD',
    designation: 'Professor',
    department: 'Department of CSE, SUST',
    quote: `Join us in celebrating creativity and teamwork at the 2024 SUST CSE CARNIVAL! Explore the marvels of technology on our campus on February 16 and 17.
  
    I appreciate your enthusiasm for critical thinking and creativity. May this event serve as a platform for learning, networking, and showcasing your talents. Your participation is the key to the success of this carnival, and I wish you a thrilling and enjoyable experience.
  
    Cheers and best of luck!`,
    imageUrl: 'https://www.sust.edu/uploads/profile-images/1550508841.jpg',
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
          <div key={quote.id} className="flex-shrink-0 px-3 w-3/5">
            <div className="bg-card-body p-3 rounded-lg w-full">
              <div className='flex flex-row mb-4 justify-evenly gap-2 items-center'>
                <img src={quote.imageUrl} alt={quote.name} className="w-32 h-32 rounded-2xl" />
                <div className='text-left'>
                  <h2 className="text-lg font-semibold mb-2 text-navbar-button">{quote.name}</h2>
                  <div className='font-semibold text-navbar'>
                    <p className="">{quote.post}</p>
                    <p className="">{quote.designation}</p>
                    <p className="">{quote.department}</p>
                  </div>
                </div>
              </div>
              <div className=' px-6 overflow-y-auto text-navbar text-justify  whitespace-pre-line' style={{ height: '18rem' }}>
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