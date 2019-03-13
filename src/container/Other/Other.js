import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Other.scss';


export class Other extends Component {
    render() {
        return (
            <div className="other">
                this is Other
                <div><Link to='/'>about</Link></div>
            </div>
        );
    }
}
export default Other;

