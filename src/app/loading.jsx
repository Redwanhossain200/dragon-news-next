import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      Global loading
      <span className="loading loading-infinity loading-xl"></span>
    </div>
  );
};

export default LoadingPage;
