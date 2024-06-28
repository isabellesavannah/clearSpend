import React from 'react';
import '../css/introComponent/introCard.css';
import { Button } from 'react-bootstrap';

const VideoCardComponent = () => {
  return (
    <div classname="container">
      <main>
        <div class="row">
          <div class="col-12 card" className='intro-component'>
            <div class='card-title'>
              <Button className='contact-us-button'>Contact Us</Button>
            </div>
            <iframe
              className='video-card'
              title='hero video'
              src="https://www.youtube.com/embed/Fjo8-ihGJiY?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&autohide=1&disablekb=1">
            </iframe>
            <div className="government-transparency-card">
              <div className="header">Government Transparency That is Easy to Implement and Easy to Use</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoCardComponent;