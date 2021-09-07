import React from 'react';
import '../styles/Home.scss';

const Home = () => {
    return (
        <div className="main-container">
            <div className="meat">
                <h1>alexgodfrey.com</h1>
                <div className="item-container">
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/26b573b103604d52acd00c8c27fa29d0?v=f1b2410ef97549aeaf6488e7f256e73e" target="_blank"><h3 className="item-1">master notes</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/PROFESSORS-5abcf7d1f9e7466386160430b48acd43" target="_blank"><h3 className="item-2">professors</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/COMPUTER-SCIENCE-TRACK-b5fc5379ee77438c8288b3013f50fc73" target="_blank"><h3 className="item-3">cs track</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/PHILOSOPHY-TRACK-104c2793a7634ac6b9854be1156c0945  " target="_blank"><h3 className="item-4">philo track</h3></a>
                    <a style={{textDecorationColor: 'white'}} href="https://alex-school.notion.site/REQUIRED-TRACK-bc65e7e738f540f2899f4eb5114c1465" target="_blank"><h3 className="item-5">required</h3></a>
                </div>
            </div>
        </div>
    )
}

export default Home;