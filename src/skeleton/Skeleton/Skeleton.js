import React, { Component } from 'react';
import './Skeleton.scss';

export class Skeleton extends Component {
    render() {
        const arr = Object.keys(Array.from({ length: 28 }));
        return (
            <div className="router-load">
                <div className='skeleton-header'>
                    <div className='header-avatar bg'></div>
                    <div className='header-right bg'></div>
                </div>
                <div className='skeleton-body'>
                    {arr.map(item => {
                        return <div key={item} className='body-item bg'></div>
                    })}
                </div>
                <div className='skeleton-footer'>
                    <div className='skeleton-footer-con bg'></div>
                </div>
            </div>
        );
    }
}
export default Skeleton;

