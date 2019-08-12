import React from 'react';

function Ripple(props) {
    return <div className={`base-ripple ${props.className && props.className}`}>
        <div className={`g-spinner-radar`}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>
}