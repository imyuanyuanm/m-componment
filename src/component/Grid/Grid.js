import React, { Component } from 'react';
import './Grid.scss';

export class Grid extends Component {

    render() {
        return (
            <div className='grid'>
                <div id="container">
                    <div className="item item-1">1</div>
                    <div className="item item-2">2</div>
                    <div className="item item-3">3</div>
                    <div className="item item-4">4</div>
                    <div className="item item-5">5</div>
                    <div className="item item-6">6</div>
                    <div className="item item-7">7</div>
                    <div className="item item-8">8</div>
                    <div className="item item-9">9</div>
                </div>
            </div>
        );
    }
}

export default Grid;


