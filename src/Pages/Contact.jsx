import React from 'react';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import ScrollButtons from '../Components/ScrollButtons';
import SocialNetwork from '../Components/SocialNetwork';

const Contact = () => {
    return (
        <div className="wrapper">
            <SocialNetwork />
            <Mouse />
            <Navigation />
            <div className="container-title">
                <div className="title">
                    <h1>Contact</h1>
                </div>
                <div className="main">

                    <ScrollButtons left={"/project-2"} right={"/"} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
