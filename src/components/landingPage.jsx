import React from 'react';
import '../css/introComponent/introCard.css';
import VideoCardComponent from './videoCardComponent';
//import GovTransparencyComponent from './govTransparencyComponent';  
const LandingPage = () => {
  return (
    <div className="landing-page">
      <main>
        <VideoCardComponent />
      </main>
    </div>
    
  );
};

export default LandingPage;