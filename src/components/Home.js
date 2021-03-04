import React, {useState} from 'react';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import Button from 'react-bootstrap/Button'
import '../styles/Home.scss';

const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="home">
            <ReactParticles className="particles" params={particlesConfig} />
            <div className="main-container">
                <h1>alexgodfrey.com</h1>
                <Button id="start" variant="outline-light" size="lg" onClick={() => setShow(!show)}>go</Button>
                {show === true ? 
                <div className="btn-container">
                    <Button id="btn" variant="outline-light" size="lg">projects</Button>
                    <div className="mind-map">
                        <div id="rec"></div>
                        <div id="circle"></div>
                        <div id="rec"></div>
                    </div>
                    <Button id="btn" variant="outline-light" size="lg">about</Button>
                </div>
                :
                <span></span>
                }
            </div>
        </div>
    )
}

export default Home;