import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './About.scss';


export class About extends Component {
    render() {
        return (
            <div className="about">
                this is About
                <div><Link to='/other'>other</Link></div>
            </div>
        );
    }
}

export default About;


