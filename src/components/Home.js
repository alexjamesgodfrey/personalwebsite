import React from 'react';
import { Link } from 'react-router-dom'
import { NavDropdown, Nav } from 'react-bootstrap';
import '../styles/Home.scss';
import Website from './Website';


const Home = () => {
    return (
        <div className="main-container">
            <div className="meat">
                <h1>ALEXGODFREY</h1>
                <div className="item-container">
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/PROFESSORS-5abcf7d1f9e7466386160430b48acd43" target="_blank">
                        <h3 className="item-1">ABT</h3>
                    </a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/26b573b103604d52acd00c8c27fa29d0?v=f1b2410ef97549aeaf6488e7f256e73e" target="_blank">
                        <h3 className="item-1">EDU</h3>
                    </a>
                    <Link style={{ textDecoration: 'none' }} to="/projects">
                        <h3 className="item-1">PRJCTS</h3>
                    </Link>
                    <h4 className="item-2">
                        <a style={{textDecorationColor: 'white', color: 'black'}} href="https://github.com/alexjamesgodfrey" target="_blank">GTHB</a> | 
                        <a style={{textDecorationColor: 'white', color: 'black'}} href="https://www.linkedin.com/in/alex-godfrey-91a7251b1/" target="_blank"> LNKDN</a> | 
                        <a style={{textDecorationColor: 'white', color: 'black'}} href="../images/resume.pdf" download> RSMÉ</a>
                    </h4>
                   
                </div>
                {/* <Website /> */}
                {/* <div className="item-container">
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/26b573b103604d52acd00c8c27fa29d0?v=f1b2410ef97549aeaf6488e7f256e73e" target="_blank"><h3 className="item-1">school</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/26b573b103604d52acd00c8c27fa29d0?v=f1b2410ef97549aeaf6488e7f256e73e" target="_blank"><h3 className="item-1">master notes</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/PROFESSORS-5abcf7d1f9e7466386160430b48acd43" target="_blank"><h3 className="item-2">professors</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/COMPUTER-SCIENCE-TRACK-b5fc5379ee77438c8288b3013f50fc73" target="_blank"><h3 className="item-3">cs track</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/PHILOSOPHY-TRACK-104c2793a7634ac6b9854be1156c0945  " target="_blank"><h3 className="item-4">philo track</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/REQUIRED-TRACK-bc65e7e738f540f2899f4eb5114c1465" target="_blank"><h3 className="item-5">required</h3></a>
                </div> */}
            </div>
        </div>
    )
}

export default Home;