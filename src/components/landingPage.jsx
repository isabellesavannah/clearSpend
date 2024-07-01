import React from 'react';
import '../css/introComponent/introCard.css';
import '../css/introComponent/challengeCard.css';
import '../css/introComponent/mainCard.css';
import '../css/introComponent/gifCard.css';
import VideoCardComponent from './videoCardComponent';
import TheChallengeComponent from './theChallengeComponent';
import GifCardComponent from './gifCardComponent';

const LandingPage = () => {
  return (
    <div>
      <main className='main-container'>
        <div className='intro-component'>
            <VideoCardComponent />
        </div>
        <div className='challenge-card-component'>
            <TheChallengeComponent />
        </div>
        <div className='gif-card-component'>
            <GifCardComponent />
        </div>
      </main>
    </div>    
  );
};

export default LandingPage;