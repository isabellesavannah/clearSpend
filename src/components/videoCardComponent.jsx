import React from 'react';
import '../css/introComponent/introCard.css';
import { Button } from 'react-bootstrap';
import logo from '../images/introComponenetImages/clearSpendLogo.png';
import boom from '../images/introComponenetImages/boom.svg';
import brain from '../images/introComponenetImages/brain.svg';
import wave from '../images/introComponenetImages/wave.svg';

const VideoCardComponent = () => {
  return (
    <div classname="container-fluid" >
      <main>
        <div className='blue-background'>
          <div className='header'>
              <div class="row" className='clear-spend-logo-card'>
                <div className='col-12'>
                    <img src={logo} alt="logo" id='clear-spend-logo'/>
                </div>
                <div className='col-12'>
                      <Button className='contact-us-button'>Contact Us</Button>
                </div>
              </div>
          </div>
          <div class="row" >
            <div class="col-12 card" className='intro-card'>
              <iframe
                className='video-card'
                title='hero video'
                src="https://www.youtube.com/embed/Fjo8-ihGJiY?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&autohide=1&disablekb=1">
              </iframe>
              <div className="government-transparency-card" >
                <div class="row">
                  <div class="col-12" id='government-transparency-card-content'>
                    <h1 id='card-title'>
                      Government Transparency That is <br/> Easy to Implement and Easy to Use
                    </h1>
                    <p id='card-description'>
                      Transform how you share state, county, city, education, and <br/> local government financials with our transparency solution.
                    </p>
                    <div class="col-12" id='contact-us-card-button'>
                      <a href="https://youtu.be/GawqxG9hWPU"  class="btn btn-primary">Contact Us</a>
                    </div>
                  </div>
                  <div class="col-12" className='watch-now-link'>
                    <a href="https://www.youtube.com/watch?v=Fjo8-ihGJiY" className="watch-now-link">Watch Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='state-challenge'>
          <div class="row">
            <div className='col-12'>
              <h1 id='challenge-title'>
                The Challenge of State Transparency
              </h1>
            </div>
            <div className='col-12'>
              <p id='challenge-description'>
                Citizens deserve transparency, but creating and implementing<br/> clear and engaging fiscal information is complex.
              </p>
            </div>
            <div className='col-12'>
              <h1 id='card-row-title'>
                Many state transparency sites fall short because they are...
              </h1> 
            </div>
          </div>
        <div class="row" className='info-card-row'>
          <div class="card" className='col-4 '>
            <div class="row" className='info-card'>
              <div className='col-2 '>
                <img src={brain} alt="" className='info-card-icons'/>
              </div> 
              <div className='col-9'>
                <h3 id='info-card-title'>
                    Overwhelming
                </h3>
                <p id='info-card-description'>
                  Data is excessive and lacking helpful context.
                </p>
              </div>
            </div>
          </div> 
          <div class="card" className='col-4 '>
            <div class="row" className='info-card'>
              <div className='col-2 '>
                <img src={brain} alt="" className='info-card-icons'/>
              </div> 
              <div className='col-9'>
                <h3 id='info-card-title'>
                  Overwhelming
                </h3>
                  <p id='info-card-description'>
                          Data is excessive and lacking helpful context.
                  </p>
              </div>
            </div>
          </div> 
          <div class="card" className='col-4 '>
            <div class="row" className='info-card'>
              <div className='col-2 '>
                <img src={brain} alt="" className='info-card-icons'/>
              </div> 
              <div className='col-9'>
                <h3 id='info-card-title'>
                  Overwhelming
                </h3>
                <p id='info-card-description'>
                  Data is excessive and lacking helpful context.
                </p>
            </div>
          </div>
            </div>
          </div>
        <div class='row' classname="info-card-row">
                        <h3 className="col-12" id='conclusion-title'>We can clear the path to effective transparency.</h3>
                        <div className="col-12">
                        <Button >Contact Us</Button>         
                        </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default VideoCardComponent;