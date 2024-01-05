import React from 'react';

const Organizer = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-title">Organized By</h1>
        <img
          src="/image/logo/CSE Society.png" // Replace with your image URL
          alt="Centered Image"
          className="rounded-lg bg-organizer-body p-5"
        />
      </div>
    </div>
  );
};

export default Organizer;
