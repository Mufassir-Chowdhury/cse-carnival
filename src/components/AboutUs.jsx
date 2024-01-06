// AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-10 lg:px-20 pb-8 pt-8 bg-aboutus-body rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-title">ABOUT US</h2>

      <div>
        <p className="text-navbar">
          Welcome to our organization! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          dignissim magna ut odio iaculis suscipit. Integer volutpat sapien ut velit cursus, sit amet
          finibus sem vulputate. Nunc viverra odio nec erat tincidunt, vel semper mi efficitur.
        </p>

        <p className="text-navbar mt-4">
          Our mission is to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus
          elit quis quam luctus, id malesuada tellus tincidunt. Vestibulum ac facilisis libero.
        </p>

        <p className="text-navbar mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed venenatis
          justo id tortor fermentum, vel ultricies justo luctus.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
