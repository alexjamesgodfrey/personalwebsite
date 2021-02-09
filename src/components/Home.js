import React from 'react';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import Button from 'react-bootstrap/Button'
import '../styles/Home.scss';

const Home = () => {
    return (
        <div className="home">
            <ReactParticles className="particles" params={particlesConfig} />
            <div className="main-container">
                <h1>alexgodfrey.com</h1>
                <Button id="btn" variant="outline-light" size="lg">coming soon</Button>
            </div>
        </div>
    )
}

export default Home;