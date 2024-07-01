import React from 'react';
import '../css/introComponent/challengeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import brain from '../images/introComponenetImages/brain.svg';
import { Button, Row } from 'react-bootstrap';

import boom from '../images/introComponenetImages/boom.svg';
import wave from '../images/introComponenetImages/wave.svg';


const VideoCardComponent = () => {
  return (
    <div classname="container" >
      <main>
            <div className='challenge-component'>
                <div class="row">
                    <div class="card" className='col-12 challenge-card'>
                        <h1 id='challenge-title'>
                        The Challenge of State Transparency
                        </h1>
                        <p id='challenge-description'>
                        Citizens deserve transparency, but creating and implementing clear and engaging fiscal information is complex.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <h1 className='col-12 challenge-card' id='challenge-title'>
                        Many state transparency sites fall short because they are...
                    </h1> 
                </div>
            </div>
            <div class="row" className='info-card-row'>
                <div class="card" className='col-4 info-card'>
                    <img src={brain} alt="" className='info-card-icons'/>
                    <h3 id='info-card-title'>
                        Overwhelming
                    </h3>
                    <p id='info-card-description'>
                        Data is excessive and lacking helpful context.
                    </p>
                </div> 
                <div class="card" className='col-4 info-card'>
                    <img src={brain} alt="" className='info-card-icons'/>
                    <h3 id='info-card-title'>
                        Overwhelming
                    </h3>
                    <p id='info-card-description'>
                        Data is excessive and lacking helpful context.
                    </p>
                </div> 
                <div class="card" className='col-4 info-card'>
                    <img src={brain} alt="" className='info-card-icons'/>
                    <h3 id='info-card-title'>
                        Overwhelming
                    </h3>
                    <p id='info-card-description'>
                        Data is excessive and lacking helpful context.
                    </p>
                </div> 
            </div>
            <div class="row">
                <div class="card" >
                    <h3 className="col-12">We can clear the path to effective transparency.</h3>
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