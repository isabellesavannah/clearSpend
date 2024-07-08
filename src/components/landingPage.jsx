import React from 'react';
import '../css/introComponent/introCard.css';
import '../css/introComponent/challengeCard.css';
import '../css/introComponent/mainCard.css';
import '../css/introComponent/gifCard.css';
import VideoCardComponent from './videoCardComponent';
import TheChallengeComponent from './theChallengeComponent';
import GifCardComponent from './gifCardComponent';
import ResultsComponent from './resultsComponent';

const LandingPage = () => {
  return (
    <div>
      <header>
      </header>
      <main className='main-container'>
        <nav className='nav-component'>
          
        </nav>
        <div className='intro-component align-items-center'>
            <VideoCardComponent />
        </div>
        
      </main>
    </div>    
  );
};

export default LandingPage;