import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({link}) => {
    if (link === undefined) {
        const pathname = window.location.pathname;
        if (pathname.includes("codebattle")) link = "/image/banner/bannerCodeBattle.jpg";
        else if (pathname.includes("hackathon")) link = "/image/banner/bannerHackathon.jpg";
        else link = "/image/banner/bannerHome.png";
    }
    const bgURL = {
        "/image/banner/bannerCodeBattle.jpg": {
            bg: "md:bg-[url('/image/banner/bannerCodeBattle.jpg')]",
            shadow: "border border-orange-300 shadow-orange-300",
        },
        "/image/banner/bannerHackathon.jpg": {
            bg: "md:bg-[url('/image/banner/bannerHackathon.jpg')]",
            shadow: "border border-cyan-200 shadow-cyan-200",

        },
        "/image/banner/bannerHome.png": {
            bg: "md:bg-[url('/image/banner/bannerHome.png')]",
            shadow: "border border-amber-100 shadow-amber-100",
        }
    }
    return (
        <div className={` mt-20 sm:mx-20 md:bg-cover md:bg-center z-10 ${bgURL[link].bg} rounded-lg `}>
            <div className="w-full h-full md:backdrop-blur-sm rounded-lg py-8 flex justify-center">
                <div className={`flex justify-center sm:h-80 aspect-video ${bgURL[link].shadow} rounded-lg border-opacity-70  shadow-md`}>
                    <img src={link} alt="banner" className="w-full h-full rounded-lg" />
                </div>

            </div>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    link : PropTypes.string,
};
