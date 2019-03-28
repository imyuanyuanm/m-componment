import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import AboutState from '../../store/About';

import './About.scss';

export class About extends Component {
    componentDidMount() {
        axios.get('http://apimanage.58corp.com/mock/59e42648f96afb201016d72c', {
            params: { ID: 12345 }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        }).then(function () {
            // always executed
        });
    }
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


