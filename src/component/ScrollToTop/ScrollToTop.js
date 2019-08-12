import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class _ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location && !this.props.location.hash) {
            // debugger
            window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}

export const ScrollToTop = withRouter(_ScrollToTop);