import React from 'react';
import '../css/introComponent/introCard.css';
import VideoCardComponent from './videoCardComponent';
import GifCardComponent from './gifCardComponent';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main>
        <VideoCardComponent />
        <GifCardComponent />
      </main>
    </div>    
    
  );
};

export default LandingPage;