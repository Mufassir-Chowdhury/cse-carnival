// ContactEnquirySection.js

import React from 'react';

const VpGs = () => {
    return (
        <div className="container mx-auto  pt-8 mb-6 text-center">
            {/* Title */}
            {/* <h2 className="text-3xl font-bold text-center mb-6 text-title">For More Enquiry</h2> */}
            <h1 className="text-3xl font-bold mb-6 text-navbar-button-hover">For More Enquiry</h1>

            {/* Two Columns */}
            <div className="flex w-full justify-between font-semibold text-navbar">
                {/* First Column (Right Aligned) */}
                <div className="flex flex-col w-full text-right">
                    <div className="mb-4">
                        <p className='font-bold text-lg'>Ashraful Islam Shanto</p>
                        <a className="text-sm hover:underline" href="mailto:ashraful1185058@gmail.com">ashraful1185058@gmail.com</a>
                        <p>01761058806</p>
                        <p>VP, CSE Society</p>
                    </div>
                </div>

                {/* Vertical Line */}
                <div className="border-l border-gray-300 h-auto mx-8"></div>

                {/* Second Column (Left Aligned) */}
                <div className="flex flex-col w-full items-start text-left">
                    <div className="mb-4">
                        <p className='font-bold text-lg'>Tufail Ahmed</p>
                        <a className="text-sm hover:underline" href="mailto:tufailahmed2018331010@gmail.com">tufailahmed2018331010@gmail.com</a>
                        <p>01627219630</p>
                        <p>GS, CSE Society</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VpGs;
