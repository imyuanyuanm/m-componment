import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { observer, inject } from 'mobx-react';
import './About.scss';

@inject('store')
@observer
export class About extends Component {
    componentDidMount() {
        // 数据请求
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


