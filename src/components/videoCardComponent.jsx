import React from 'react';
import '../css/introComponent/introCard.css';
import { Button } from 'react-bootstrap';

const VideoCardComponent = () => {
  return (
    <div classname="container">
      <div class="row">
        <div class="col-12 " >
          <Button class="d-flex justify-content-end" style={{ backgroundColor: 'white', color: '#04324E' }}>Contact Us</Button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <video className="video-card" controls>
            <source src="<path-to-your-video>/DemoVideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="col-12">
          <div className="government-transparency-card">
            <div>Gov Trans</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardComponent;