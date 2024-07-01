import React, { useState } from 'react';
import '../css/introComponent/gifCard.css';
import transparencyGif from '../images/gifs/transparentIdaho.gif';
import siteDemo from '../images/gifs/siteDemo.gif';
import stats from '../images/gifs/stats.gif';

const GifCardComponent = () => {
    const [currentGif, setCurrentGif] = useState(null);
    return (
        <div className="landing-page">
        <main>
            <div class="row">
                <div class="card col-6">
                    <h5 class="card-title">Transparency That Citizens Deserve</h5>
                    <p>
                        Our solution simplifies the complexities of transparency efforts, 
                        ensuring your state meets legislative mandates and public 
                        expectations for open governance.
                    </p>
                    <h5 class="card-title">The key elements to effective transparency are...</h5>
                    <div
                    onMouseEnter={() => setCurrentGif(transparencyGif)} 
                    onMouseLeave={() => setCurrentGif(null)}>
                        <p class="card-text">Intuitive Data</p>
                    </div>

                    <div
                    onMouseEnter={() => setCurrentGif(siteDemo)} 
                    onMouseLeave={() => setCurrentGif(null)}>
                        <p class="card-text">Informative Data</p>
                    </div>

                    <div
                    onMouseEnter={() => setCurrentGif(stats)} 
                    onMouseLeave={() => setCurrentGif(null)}>
                        <p class="card-text">Interactive Data</p>
                    </div>
                </div>
                <div class="card col-6">
                    {currentGif && (
                        <img 
                            className="card-img-top" 
                            src={currentGif} 
                            alt="" 
                        />
                    )}
                </div>
                <div class="card col-12">
                    <a href="https://youtu.be/GawqxG9hWPU" class="btn btn-primary">Contact Us</a>
                </div>
            </div>
        </main>
        </div>
    );
};

export default GifCardComponent;