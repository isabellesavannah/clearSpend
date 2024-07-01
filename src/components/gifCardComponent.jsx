import React, { useState } from 'react';
import '../css/introComponent/gifCard.css';
import transparencyGif from '../images/gifs/transparentIdaho.gif';
import siteDemo from '../images/gifs/siteDemo.gif';
import stats from '../images/gifs/stats.gif';

const GifCardComponent = () => {
    const [currentGif, setCurrentGif] = useState(null);
    return (
        <main>
            <row>
                <div class="card" className='col-12'>
                    <div class="row">
                        <h3 className='col-12 gif-card'>
                            Transparency That Citizens Deserve
                        </h3>
                    </div>
                    <div class="row">
                        <p className='col-12'>
                            Our solution simplifies the complexities of transparency efforts, 
                            ensuring your state meets legislative mandates and public 
                            expectations for open governance.
                        </p>
                    </div>
                </div>
            </row>
            <row>
                <div class="card" className='col-12'>
                    <div class="row">
                        <h3 className='col-12 gif-card'>
                        The key elements to effective transparency are...
                        </h3>
                    </div>
                    <div class="row">
                        <div className='col-6'>
                            <div class='row'>
                                <div className='col-12'
                                    onMouseEnter={() => setCurrentGif(transparencyGif)} 
                                    onMouseLeave={() => setCurrentGif(null)}>
                                        Intuitive Data
                                </div>
                            </div>
                            <div class='row'>
                                <div className='col-12'
                                   onMouseEnter={() => setCurrentGif(siteDemo)} 
                                    onMouseLeave={() => setCurrentGif(null)}>
                                        Informative Data
                                </div>
                            </div>
                            <div class='row'>
                                <div className='col-12'
                                    onMouseEnter={() => setCurrentGif(stats)} 
                                    onMouseLeave={() => setCurrentGif(null)}>
                                        Interactive Data
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </row>


        </main>
    );
};

export default GifCardComponent;