import React from 'react';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import Project from '../Components/Project';
import ScrollButtons from '../Components/ScrollButtons';
import SocialNetwork from '../Components/SocialNetwork';

export const Project1 = () => {
    return (
        <div className="wrapper">
            <SocialNetwork />
            <Mouse />
            <Navigation />
            <div className="container-title">
                <div className="title">
                    <h1>Project 1</h1>
                </div>
            </div>
            <div className="main">
                <div className="project">
                    <Project projectNumber={1} />
                </div>
                <ScrollButtons left={"/competences"} right={"/project-2"} />
            </div>
            <div className="svg">
                <div style={{ zIndex: -1, }} className="svg-project1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -30 1440 320">
                        <defs>
                            <linearGradient id="paint0_linear" x1="1551.7" y1="191.624" x2="-244.667" y2="220.812" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A1A3C1" />
                                <stop offset="0.0638741" stop-color="#A3A8F1" />
                                <stop offset="0.159834" stop-color="#92B9DA" />
                                <stop offset="0.603293" stop-color="#0095C4" />
                                <stop offset="0.805701" stop-color="#379AC3" />
                                <stop offset="0.993998" stop-color="#E1E1E3" />
                            </linearGradient>
                        </defs>
                        <path d="M10 161.532L71.7917 182.465C133.583 203.399 257.167 245.266 380.75 217.398C504.333 189.007 627.917 92.1892 751.5 42.8645C875.083 -5.9368 998.667 -5.93681 1122.25 8.06251C1245.83 21.5385 1369.42 50.3221 1431.21 63.7981L1493 77.7974V329H1431.21C1369.42 329 1245.83 329 1122.25 329C998.667 329 875.083 329 751.5 329C627.917 329 504.333 329 380.75 329C257.167 329 133.583 329 71.7917 329H10V161.532Z" fill="url(#paint0_linear)" />
                    </svg>
                </div>
                <div style={{ zIndex: -10, }} className="svg-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -80 1440 320">
                        <defs>
                            <linearGradient id="paint1_linear" x1="1551.7" y1="191.624" x2="-244.667" y2="220.812" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#d1A3C1" />
                                <stop offset="0.0638741" stop-color="#A3A8F1" />
                                <stop offset="0.159834" stop-color="#92B9DA" />
                                <stop offset="0.603293" stop-color="rgb(143, 92, 148)" />
                                <stop offset="0.805701" stop-color="rgb(224, 128, 243)" />
                                <stop offset="0.993998" stop-color="#E1E1E3" />
                            </linearGradient>
                        </defs>
                        <path d="M10 161.532L71.7917 182.465C133.583 203.399 257.167 245.266 380.75 217.398C504.333 189.007 627.917 92.1892 751.5 42.8645C875.083 -5.9368 998.667 -5.93681 1122.25 8.06251C1245.83 21.5385 1369.42 50.3221 1431.21 63.7981L1493 77.7974V329H1431.21C1369.42 329 1245.83 329 1122.25 329C998.667 329 875.083 329 751.5 329C627.917 329 504.333 329 380.75 329C257.167 329 133.583 329 71.7917 329H10V161.532Z" fill="url(#paint1_linear)" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export const Project2 = () => {
    return (
        <div className="wrapper">
            <SocialNetwork />
            <Mouse />
            <Navigation />
            <div className="container-title">
                <div className="title">
                    <h1>Project 2</h1>
                </div>
                <div className="main">
                    <div className="project">
                        <Project projectNumber={0} />
                    </div>
                    <ScrollButtons left={"/project-1"} right={"/project-3"} />
                </div>
                <div className="svg">
                    <div style={{ zIndex: -1, }} className="svg-project1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -30 1440 320">
                            <defs>
                                <linearGradient id="paint0_linear" x1="1551.7" y1="191.624" x2="-244.667" y2="220.812" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A1A3C1" />
                                    <stop offset="0.0638741" stop-color="#A3A8F1" />
                                    <stop offset="0.159834" stop-color="#92B9DA" />
                                    <stop offset="0.603293" stop-color="#0095C4" />
                                    <stop offset="0.805701" stop-color="#379AC3" />
                                    <stop offset="0.993998" stop-color="#E1E1E3" />
                                </linearGradient>
                            </defs>
                            <path d="M10 161.532L71.7917 182.465C133.583 203.399 257.167 245.266 380.75 217.398C504.333 189.007 627.917 92.1892 751.5 42.8645C875.083 -5.9368 998.667 -5.93681 1122.25 8.06251C1245.83 21.5385 1369.42 50.3221 1431.21 63.7981L1493 77.7974V329H1431.21C1369.42 329 1245.83 329 1122.25 329C998.667 329 875.083 329 751.5 329C627.917 329 504.333 329 380.75 329C257.167 329 133.583 329 71.7917 329H10V161.532Z" fill="url(#paint0_linear)" />
                        </svg>
                    </div>
                    <div style={{ zIndex: -10, }} className="svg-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -80 1440 320">
                            <defs>
                                <linearGradient id="paint1_linear" x1="1551.7" y1="191.624" x2="-244.667" y2="220.812" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#d1A3C1" />
                                    <stop offset="0.0638741" stop-color="#A3A8F1" />
                                    <stop offset="0.159834" stop-color="#92B9DA" />
                                    <stop offset="0.603293" stop-color="rgb(143, 92, 148)" />
                                    <stop offset="0.805701" stop-color="rgb(224, 128, 243)" />
                                    <stop offset="0.993998" stop-color="#E1E1E3" />
                                </linearGradient>
                            </defs>
                            <path d="M10 161.532L71.7917 182.465C133.583 203.399 257.167 245.266 380.75 217.398C504.333 189.007 627.917 92.1892 751.5 42.8645C875.083 -5.9368 998.667 -5.93681 1122.25 8.06251C1245.83 21.5385 1369.42 50.3221 1431.21 63.7981L1493 77.7974V329H1431.21C1369.42 329 1245.83 329 1122.25 329C998.667 329 875.083 329 751.5 329C627.917 329 504.333 329 380.75 329C257.167 329 133.583 329 71.7917 329H10V161.532Z" fill="url(#paint1_linear)" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Project3 = () => {
    return (
        <div className="wrapper">
            <SocialNetwork />
            <Mouse />
            <Navigation />
            <div className="container-title">
                <div className="title">
                    <h1>Project 3</h1>
                </div>
                <div className="main">
                    <div className="project">
                        <Project projectNumber={2} />
                    </div>
                    <ScrollButtons left={"/project-2"} right={"/contact"} />
                </div>
                <div className="svg">
                    <div style={{ zIndex: -1, }} className="svg-project1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -30 1440 320">
                            <defs>
                                <linearGradient id="paint0_linear" x1="1551.7" y1="191.624" x2="-244.667" y2="220.812" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A1A3C1" />
                                    <stop offset="0.0638741" stop-color="#A3A8F1" />
                                    <stop offset="0.159834" stop-color="#92B9DA" />
                                    <stop offset="0.603293" stop-color="#0095C4" />
                                    <stop offset="0.805701" stop-color="#379AC3" />
                                    <stop offset="0.993998" stop-color="#E1E1E3" />
                                </linearGradient>
                            </defs>
                            <path d="M10 161.532L71.7917 182.465C133.583 203.399 257.167 245.266 380.75 217.398C504.333 189.007 627.917 92.1892 751.5 42.8645C875.083 -5.9368 998.667 -5.93681 1122.25 8.06251C1245.83 21.5385 1369.42 50.3221 1431.21 63.7981L1493 77.7974V329H1431.21C1369.42 329 1245.83 329 1122.25 329C998.667 329 875.083 329 751.5 329C627.917 329 504.333 329 380.75 329C257.167 329 133.583 329 71.7917 329H10V161.532Z" fill="url(#paint0_linear)" />
                        </svg>
                    </div>
                    <div style={{ zIndex: -10, }} className="svg-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -80 1440 320">
                            <defs>
                                <linearGradient id="paint1_linear" x1="1551.7" y1="191.624" x2="-244.667" y2="220.812" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#d1A3C1" />
                                    <stop offset="0.0638741" stop-color="#A3A8F1" />
                                    <stop offset="0.159834" stop-color="#92B9DA" />
                                    <stop offset="0.603293" stop-color="rgb(143, 92, 148)" />
                                    <stop offset="0.805701" stop-color="rgb(224, 128, 243)" />
                                    <stop offset="0.993998" stop-color="#E1E1E3" />
                                </linearGradient>
                            </defs>
                            <path d="M10 161.532L71.7917 182.465C133.583 203.399 257.167 245.266 380.75 217.398C504.333 189.007 627.917 92.1892 751.5 42.8645C875.083 -5.9368 998.667 -5.93681 1122.25 8.06251C1245.83 21.5385 1369.42 50.3221 1431.21 63.7981L1493 77.7974V329H1431.21C1369.42 329 1245.83 329 1122.25 329C998.667 329 875.083 329 751.5 329C627.917 329 504.333 329 380.75 329C257.167 329 133.583 329 71.7917 329H10V161.532Z" fill="url(#paint1_linear)" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}