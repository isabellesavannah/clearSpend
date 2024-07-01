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
                <h3 className='col-12 gif-card'>
                    Transparency That Citizens Deserve
                </h3>
                <p className='col-12'>
                    Our solution simplifies the complexities of transparency efforts, 
                    ensuring your state meets legislative mandates and public 
                    expectations for open governance.
                </p>
            </row>
            <row>

                <h5 className='col-12'>The key elements to effective transparency are...</h5>
            </row>
            <row className='hover-options'>
                <div class="card" className='col-6'>
                    <li 
                    onMouseEnter={() => setCurrentGif(transparencyGif)} 
                    onMouseLeave={() => setCurrentGif(null)}>
                        Intuitive Data
                    </li>

                    <li
                    onMouseEnter={() => setCurrentGif(siteDemo)} 
                    onMouseLeave={() => setCurrentGif(null)}>
                        Informative Data
                    </li>

                    <li
                    onMouseEnter={() => setCurrentGif(stats)} 
                    onMouseLeave={() => setCurrentGif(null)}>
                        Interactive Data
                    </li>
                </div>
                <div class="card" className='col-6'>
                    {currentGif && (
                        <img 
                            className="card-img-top col-6" 
                            src={currentGif} 
                            alt="" 
                        />
                    )}
                </div>
            </row>
        </main>
    );
};

export default GifCardComponent;