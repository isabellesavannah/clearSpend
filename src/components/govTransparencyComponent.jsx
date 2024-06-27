import React from 'react';
import '../css/introComponent/introCard.css'; // Assuming you have a CSS file for styling

const govTransparencyComponent = () => {
  return (
    
      <div className="card">
        <div className="card-body">
              <a href="https://youtu.be/GawqxG9hWPU" className="btn btn-primary">Contact Us</a>
        </div>
        <video className="video-card" controls>
          <source src="https://youtu.be/Fjo8-ihGJiY?si=awDkfd9wbKfGKUDL"/>
        </video>
      </div>
  );
}

export default govTransparencyComponent;