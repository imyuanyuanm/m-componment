import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import './About.scss';

@inject('store')
@observer
export class About extends Component {
    componentDidMount() {
        const { aboutStore } = this.props.store;
        aboutStore.fetchData();
    }
    // 状态管理 mobx
    handleInputChanged = (event) => {
        const { aboutStore } = this.props.store;
        aboutStore.setSearchText(event.target.value);
    }
    render() {
        const { aboutStore } = this.props.store;
        return (
            <div className="about">
                this is About
                <div><Link to='/other'>other</Link></div>
                <input
                    value={aboutStore && aboutStore.searchText}
                    onChange={this.handleInputChanged}
                />
                <div>searchText:{aboutStore.searchText}</div>
            </div>
        );
    }
}

export default About;


