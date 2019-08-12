import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from '../../component';
import './Test.scss';

const navs = [
    { id: 1, text: '11' },
    { id: 2, text: '22' },
]
export class Test extends Component {
    render() {
        return (
            <div className="Test">
                <Anchor navs={navs} />
                <div style={{ height: 500 }}></div>
                <Link to='/test1'>test1</Link>
            </div>
        );
    }
}

export default Test;


