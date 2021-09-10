import React from 'react'
import imageInSrc from './imageInSrc.jpg'
import './App.css' ;
import video from './video.mp4'

function App() {
    return (
        <div style={{border:'solid 1px black' , maxwidth:'100vw'}}>

            <h1 className="titleRed">Your name here</h1>

            <div className="abc">
                <img src={imageInSrc} alt="image2"/> <br />

                <img src="/imageInPublic.jpg" alt="image1"/>
                <video className="ab" width="500" height="240" src={video}  controls>
                </video>
            </div>

        </div>
    );
}
export default App;
