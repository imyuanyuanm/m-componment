import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RollList } from '../../component';
import './About.scss';

class About extends Component {
    render() {
        return (
            <div className="about">
                <Link to='/test'>test</Link>
                {/* <Grid /> */}
                <RollList />
                <div className="bg">
                    <div className="content">
                        <div className="circle-main">
                            <p className="circle-one"></p>
                            <p className="circle-two"></p>
                            <p className="circle-three"></p>
                            <p className="circle-four"></p>
                            <p className="circle-five"></p>
                        </div>
                    </div>
                </div>

                <br />
                <div className={`g-spinner-radar`}>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        );
    }
}

export default About;


