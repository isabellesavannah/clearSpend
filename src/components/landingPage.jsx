import React from 'react';
import '../css/introComponent/introCard.css';

import '../css/introComponent/challengeCard.css';
import VideoCardComponent from './videoCardComponent';
import TheChallengeComponent from './theChallengeComponent';
import GifCardComponent from './gifCardComponent';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main>
        <div className='intro-component'>
            <VideoCardComponent />
        </div>
        <div >
            <TheChallengeComponent />
        </div>
      </main>
    </div>    
    
  );
};

export default LandingPage;