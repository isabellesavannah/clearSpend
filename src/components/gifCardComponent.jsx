import React, { useState } from 'react';
import '../css/introComponent/gifCard.css';
import transparencyGif from '../images/gifs/transparentIdaho.gif';
import siteDemo from '../images/gifs/siteDemo.gif';
import stats from '../images/gifs/stats.gif';
import { Button } from 'react-bootstrap';
import woolf from '../images/gifs/woolf.png';

const GifCardComponent = () => {
    const [currentGif, setCurrentGif] = useState(transparencyGif);
    return (
        <div className='container-fluid '>
            <main className='gif-component-contents'>
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
                                    <h1 className='elements-title'>Intuitive Data</h1>
                                    <p className='elements-desc'>
                                        Whether you’re searching for high-level state reports or a specific <br/>
                                        county salary, information is easy-to-find for everyone.
                                    </p>
                                    <div className='white-line'>

                                    </div>    
                                </div>
                                
                        </div>
                        <div className="row">
                            <div className='col-12'
                            onMouseEnter={() => setCurrentGif(siteDemo)}
                            onMouseLeave={() => setCurrentGif(transparencyGif)}
                            >
                                <h1 className='elements-title'>Informative Data</h1>
                                    <p className='elements-desc'>
                                    Tooltips and descriptions clear up confusion and guide users to <br/>
                                     understand data with much needed context.
                                    </p>
                                    <div className='white-line'>

                                    </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className='col-12'
                            onMouseEnter={() => setCurrentGif(stats)}
                            onMouseLeave={() => setCurrentGif(transparencyGif)}
                            >
                                <h1 className='elements-title'>Interactive Data</h1>
                                    <p className='elements-desc'>
                                    You can explore dynamic interactions with data to gain insights beyond <br/>
                                    the numbers.
                                    </p>
                                    <div className='white-line'>

                                    </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-6 gif-column">
                        {currentGif && (
                            <img 
                                className="img-fluid gif-style" 
                                src={currentGif} 
                                alt="Current GIF" 
                            />
                        )}
                    </div>
                </div>
            <div class='row' className='conclusion'>
                <p id='gif-component-title'>Transforming Government Transparency</p>
                <p id='conclusion-desc'>Discover how our platform revolutionized transparency for Idaho.</p>
                <div className='col-12'>
                    <Button >Contact Us</Button>
                </div>
            </div>
            <row>
                <div className='col-12'>
                <img 
                    className="img-fluid woolf-img" 
                    src={woolf} 
                    alt="" 
                />
                </div>
            </row>
        </main>
        </div>
        
    );
};

export default GifCardComponent;