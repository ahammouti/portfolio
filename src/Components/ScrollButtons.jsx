import React from 'react';
import { NavLink } from 'react-router-dom';

const ScrollButtons = (props) => {
    return (
        <div className="wrapper">
            <div className="scroll-button1">
                <div className="sb-main1">
                    {props.left && (
                        <NavLink to={props.left} className="left">
                            <span>&#10092; </span>
                        </NavLink>
                    )}
                </div>
            </div>
            <div className="scroll-button2">
                <div className="sb-main2">
                    {props.right && (
                        <NavLink to={props.right} className="right">
                            <span> &#10093;</span>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScrollButtons;