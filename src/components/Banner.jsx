import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({link}) => {
    const bgURL = {
        "/image/banner/bannerCodeBattle.jpg": "md:bg-[url('/image/banner/bannerCodeBattle.jpg')]",
        "/image/banner/bannerHackathon.jpg": "md:bg-[url('/image/banner/bannerHackathon.jpg')]",
        "/image/banner/bannerHome.png": "md:bg-[url('/image/banner/bannerHome.png')]",
    }
    return (
        <div className={` mt-20 sm:mx-20 md:bg-cover md:bg-center z-10 ${bgURL[link]}`}>
            <div className="w-full h-full md:backdrop-blur-sm py-8 flex justify-center">
                <div className="flex justify-center sm:h-80 aspect-video">
                    <img src={link} alt="banner" className="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    link : PropTypes.string.isRequired,
};
