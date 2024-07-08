import React from 'react';
import '../css/introComponent/challengeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import brain from '../images/introComponenetImages/brain.svg';
import { Button } from 'react-bootstrap';
import boom from '../images/introComponenetImages/boom.svg';
import wave from '../images/introComponenetImages/wave.svg';


const VideoCardComponent = () => {
  return (
        <main>
            <div class="row" className='challenge-component'>
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
      </main>
  );
};

export default VideoCardComponent;