import React from 'react';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import Button from 'react-bootstrap/Button'
import '../styles/Home.scss';

const Home = () => {
    const showButtons = () => {
        document.getElementById('start').style.display = 'none';
        document.getElementsByClassName('btn-container')[0].style.display = 'flex';
    }

    return (
        <div className="home">
            <ReactParticles className="particles" params={particlesConfig} />
            <div className="main-container">
                <h1>alexgodfrey.com</h1>
                <Button id="start" variant="outline-light" size="lg" onClick={() => showButtons()}>go</Button>
                <div className="btn-container">
                    <Button id="btn" variant="outline-light" size="lg">projects</Button>
                    <div className="mind-map">
                        <div id="rec"></div>
                        <div id="circle"></div>
                        <div id="rec"></div>
                    </div>
                    <Button id="btn" variant="outline-light" size="lg">about</Button>
                </div>
                
            </div>
        </div>
    )
}

export default Home;