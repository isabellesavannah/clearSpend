import React from 'react';
import '../css/introComponent/results.css';
import { Button } from 'react-bootstrap';
import card from '../images/results/card3.png';
import screens from '../images/results/screens.png';

const VideoCardComponent = () => {
  return (
    <div classname="container " >
      <main>
        <div class="row" className='results-card'>
          <div class='card' className='col-4 card-one'>
              <img src={card} alt="logo"/>
          </div>
          <div className='col-6'>
            <img src={screens} alt="logo"/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoCardComponent;