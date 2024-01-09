// NotFound.jsx

import React from 'react';

const NotFound = () => {
  return (
    <div className="text-center py-28 h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
      <p className="text-lg mt-4">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
