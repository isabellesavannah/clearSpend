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
      <header>
      </header>
      <main className='main-container'>
        <nav className='nav-component'>
          
        </nav>
        <div className='intro-component'>
            <VideoCardComponent />
        </div>
        <div className='challenge-card-component universal-componenet'>
            <TheChallengeComponent />
        </div>
        <div className='gif-component universal-componenet'>
            <GifCardComponent />
        </div>
      </main>
    </div>    
  );
};

export default LandingPage;