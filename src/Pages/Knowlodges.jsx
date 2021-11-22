import React from 'react';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import ScrollButtons from '../Components/ScrollButtons';
import SocialNetwork from '../Components/SocialNetwork';

const Knowlodges = () => {

    let left = Math.floor(Math.random() * 300 + 600) + "px";
    let top = Math.floor(Math.random() * 100 + 350) + "px";
    let size = "scale(" + (Math.random() + 0.7) + ")";

    return (
        <div className="wrapper">
            <SocialNetwork />
            <Mouse />
            <Navigation />
            <div className="container-title">
                <div className="title">
                    <h1>competences</h1>
                </div>
            </div>
            <div className="main">
                <ScrollButtons left={"/"} right={"/project-1"} />
                <span className="random-circle" style={{ left, top, transform: size }}></span>

            </div>
        </div>
    );
};

export default Knowlodges;