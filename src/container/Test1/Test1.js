import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from '../../component';
import './Test1.scss';

const navs = [
    { id: 1, text: '11' },
    { id: 2, text: '22' },
]
export class Test1 extends Component {
    render() {
        return (
            <div className="Test1">
                <Anchor navs={navs} />
                <div style={{ height: 500 }}></div>
                <Link to='/'>about</Link>
            </div>
        );
    }
}

export default Test1;


