import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home'
import Knowledges from './Pages/Knowlodges'
import Contact from './Pages/Contact';
import Mouse from './Components/Mouse'
import { Project1, Project2, Project3 } from './Pages/Projects';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/competences" component={Knowledges} />
                    <Route path="/project-1" component={Project1} />
                    <Route path="/project-2" component={Project2} />
                    <Route path="/project-3" component={Project3} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;