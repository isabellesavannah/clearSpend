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
            <div className="government-transparency-card government-transparency-card-content" >
              <div class="row">
                <div class="col-12">
                  <h1 id='card-title'>
                    Government Transparency That is Easy to Implement and Easy to Use
                  </h1>
                  <p>
                    Transform how you share state, county, city, education, and local government financials with our transparency solution.
                  </p>
                </div>
                <div class="col-12">
                  <a href="https://youtu.be/GawqxG9hWPU" class="btn btn-primary">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoCardComponent;