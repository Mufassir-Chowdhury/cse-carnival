import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({link}) => {
    if (link === undefined) {
        const pathname = window.location.pathname;
        if (pathname.includes("codebattle")) link = "/image/banner/bannerCodeBattle.jpg";
        else if (pathname.includes("hackathon")) link = "/image/banner/bannerHackathon.jpg";
        else if (pathname.includes("iupc")) link = "/image/banner/bannerIUPC.jpg";
        else if (pathname.includes("dlsprint")) link = "/image/banner/bannerDLEnigma.jpg";
        else link = "/image/banner/bannerHome.jpg";
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
        "/image/banner/bannerIUPC.jpg": {
            bg: "md:bg-[url('/image/banner/bannerIUPC.jpg')]",
            shadow: "border border-cyan-600 shadow-cyan-600",
        },
        "/image/banner/bannerDLEnigma.jpg": {
            bg: "md:bg-[url('/image/banner/bannerDLEnigma.jpg')]",
            shadow: "border border-pink-500 shadow-pink-500",
        },
        "/image/banner/bannerHome.jpg": {
            bg: "md:bg-[url('/image/banner/bannerHome.jpg')]",
            shadow: "border border-amber-100 shadow-amber-100",
        }
    }
    return (
        <div className={` mt-20 sm:mx-20 md:bg-cover md:bg-center z-10 ${bgURL[link].bg} rounded-lg md:border border-sky-900 `}>
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
