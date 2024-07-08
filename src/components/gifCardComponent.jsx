import React, { useState } from 'react';
import '../css/introComponent/gifCard.css';
import transparencyGif from '../images/gifs/transparentIdaho.gif';
import siteDemo from '../images/gifs/siteDemo.gif';
import stats from '../images/gifs/stats.gif';
import intuitive from '../images/gifs/intuitiveData.png';
import informative from '../images/gifs/informativeData.png';
import interactivedata from '../images/gifs/interactivedata.png';
import woolf from '../images/gifs/woolf.png';

const GifCardComponent = () => {
    const [currentGif, setCurrentGif] = useState(transparencyGif);
    return (
        <main>
            <div class="row">
                <div className='col'>
                    <h3 id='gif-component-title'>
                        Transparency That Citizens Deserve
                    </h3>
                </div>
            </div>
                <div class="row">
                    <p className='col' id='gif-component-description'>
                        Our solution simplifies the complexities of transparency efforts,<br/>
                        ensuring your state meets legislative mandates and public <br/>
                        expectations for open governance.
                    </p>
                </div>
                <div className="row">
                    <div className="col-9">
                        <h3 id='gif-card-title'>The key elements to effective transparency are...</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 gif-card-components">
                        <div className="row">
                                <div className='col-12'
                                onMouseEnter={() => setCurrentGif(transparencyGif)}
                                onMouseLeave={() => setCurrentGif(transparencyGif)}
                                >
                                    <img 
                                    className="img-fluid" 
                                    src={intuitive} 
                                    alt="Current GIF" 
                                    />
                                </div>
                                
                        </div>
                        <div className="row">
                            <div className='col-12'
                            onMouseEnter={() => setCurrentGif(siteDemo)}
                            onMouseLeave={() => setCurrentGif(transparencyGif)}
                            >
                                <img 
                                className="img-fluid" 
                                src={informative} 
                                alt="Current GIF" 
                                />
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className='col-12'
                            onMouseEnter={() => setCurrentGif(stats)}
                            onMouseLeave={() => setCurrentGif(transparencyGif)}
                            >
                                <img 
                                className="img-fluid" 
                                src={interactivedata} 
                                alt="Current GIF" 
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-6">
                        {currentGif && (
                            <img 
                                className="img-fluid" 
                                src={currentGif} 
                                alt="Current GIF" 
                            />
                        )}
                    </div>
                </div>
            <row>
                <div className='col-12'>
                <img 
                    className="img-fluid" 
                    src={woolf} 
                    alt="Current GIF" 
                />
                </div>
            </row>
        </main>
    );
};

export default GifCardComponent;