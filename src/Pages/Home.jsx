import React from 'react';
import DynamicText from '../Components/DynamicText';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import ScrollButtons from '../Components/ScrollButtons';
import SocialNetwork from '../Components/SocialNetwork';

const Home = () => {
    return (
        <div className="wrapper">
            <SocialNetwork />
            <Mouse />
            <Navigation />

            <div className="container-title">
                <div className="title">
                    <h1>Accueil</h1>
                </div>
            </div>

            <div className="main">
                <h2> <span className="big-logo"></span>Ali Hammouti </h2>
                <h3> <DynamicText /> </h3>
                <ScrollButtons left={"/contact"} right={"/competences"} />
            </div>

            <div className="svg">
                <div className="anim-forms">
                    <span className="triangle1"></span>
                    <span className="triangle2"></span>
                </div>
                <div className="svg-home1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#004b76" fillOpacity="0.8" d="M0,288L360,192L720,288L1080,192L1440,32L1440,320L1080,320L720,320L360,320L0,320Z"></path></svg>
                </div>
                <div className="svg-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D8D8D8" fillOpacity="2" d="M0,288L360,192L720,288L1080,256L1440,64L1440,320L1080,320L720,320L360,320L0,320Z"></path></svg>
                </div>
            </div>

        </div>
    );
};

export default Home;