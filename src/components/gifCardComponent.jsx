import React from 'react';
import '../css/introComponent/gifCard.css';
import transparencyGif from '../images/gifs/transparentIdaho.gif';

const GifCardComponent = () => {
  return (
    <div className="landing-page">
      <main>
        <div class="row ">
            <div class="card col-6">
                <p class="card-text">Intuitive Data</p>
            </div>
            <div class="card col-6">
                <img className="card-img-top" src={transparencyGif} alt="gif1" />
            </div>
        </div>
      </main>
    </div>
  );
};

export default GifCardComponent;