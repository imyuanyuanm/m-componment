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
  setShowDate = (flag) => {
    this.setState({
      showDate: flag,
    })
  }
  render() {
    return (
      <div className="about">
        <Button onClick={this.setShowDate}>在职时间</Button>
        <MyDatePicker
          changeDate={this.changeDate}
          show={this.state.showDate}
          setShow={this.setShowDate}
        />
      </div>
    );
  }
}

export default About;


