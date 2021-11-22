import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink className="hover" activeClassName="nav-active" exact to="/" >
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="hover" activeClassName="nav-active" exact to="/competences" >
                        <span>Compétences</span>
                    </NavLink>
                </li>
                <li className="nav-portfolio">Portfolio
                    <ul className="nav-projects">
                        <NavLink className="hover" activeClassName="nav-active" exact to="/project-1" >
                            <li>projet 1</li>
                        </NavLink>
                        <NavLink className="hover" activeClassName="nav-active" exact to="/project-2" >
                            <li>projet 2</li>
                        </NavLink>
                        <NavLink className="hover" activeClassName="nav-active" exact to="/project-3" >
                            <li>projet 3</li>
                        </NavLink>
                    </ul>
                </li>
                <li>
                    <NavLink className="hover" activeClassName="nav-active" exact to="/contact" >
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;