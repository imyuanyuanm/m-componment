import React, { Component } from 'react';
import { MyDatePicker } from '../../component';
import { Button } from 'antd-mobile';

import './About.scss';

class About extends Component {
    state = {}
    changeDate = (date) => {
        this.setState({ date })
    }
    getShowDatePiker = (showDatePiker) => {
        this.showDatePiker = showDatePiker;
    }
    showPiker = () => {
        this.showDatePiker();
    }
    render() {
        return (
            <div className="about">
                <Button onClick={this.showPiker}>在职时间</Button>
                <MyDatePicker
                    changeDate={this.changeDate}
                    getShowDatePiker={this.getShowDatePiker}
                />
            </div>
        );
    }
}

export default About;


