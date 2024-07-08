import React from 'react';
import '../css/introComponent/introCard.css';
import '../css/introComponent/challengeCard.css';
import '../css/introComponent/mainCard.css';
import '../css/introComponent/gifCard.css';
import VideoCardComponent from './videoCardComponent';
import FooterComponent from './footerComponent';
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
        <div className='align-items-center'>
            <VideoCardComponent />
        </div>
        <div className='align-items-center gif-component'>
            <GifCardComponent />
        </div>
      </main>
      <footer>
      <div className='align-items-center'>
            <FooterComponent />
        </div>
      </footer>
    </div>    
  );
};

export default LandingPage;