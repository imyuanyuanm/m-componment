import React, { Component } from 'react';
import { DatePickerView } from 'antd-mobile';

import './MyDatePicker.scss';

const defaultValue = new Date(new Date().valueOf() - 3600 * 24 * 30 * 12 * 4 * 1000);
const defaultMinDate = new Date('2000-01-01');

export class MyDatePicker extends Component {
  state = {
    value: defaultValue,
    stap: 0,
    fromDate: defaultValue,
    toDate: defaultValue,
    minDate: defaultMinDate,
    maxDate: new Date()
  }
  // 选择日期
  onChange = (date) => {
    this.setState({ value: date })
  }
  // 点击返回/下一步 返回: 0 下一步:1
  changeStap = (stap) => {
    const { fromDate, value } = this.state;
    if (stap == 1) {
      this.setState({ fromDate: value, minDate: value })
    } else {
      this.setState({ value: fromDate, minDate: defaultMinDate })
    }
    this.setState({ stap })
  }
  // 点击完成
  clickSure = () => {
    const { fromDate, value } = this.state;
    this.props.setShow(false);
    this.setState({ toDate: value, stap: 0, value: defaultValue, minDate: defaultMinDate }, () => {
      const { toDate } = this.state;
      const date = { fromDate, toDate }
      this.props.changeDate(date);
    })
  }
  // 点击取消
  clickCancle = () => {
    this.props.setShow(false);
    this.setState({ value: defaultValue, stap: 0 })
  }
  // 显示piker
  showDatePiker = () => {
    this.props.setShow(true);
  }
  render() {
    const { value, stap, minDate, maxDate } = this.state;
    const title = stap == 0 ? '入职时间' : '离职时间';
    return (
      <div className={`my-date-picker ${!this.props.show ? 'my-date-picker-hide' : ''}`}>
        <div className='border_1px'></div>
        <div className='my-date-picker-head'>
          {stap == 0 ? <div className='action-box'>
            <div onClick={this.clickCancle} className='action-pre'>取消</div>
            <div onClick={() => { this.changeStap(1); }} className='action-next'>下一步</div>
          </div> : <div className='action-box'>
              <div onClick={() => { this.changeStap(0); }} className='action-pre'>返回</div>
              <div onClick={this.clickSure} className='action-next'>完成</div>
            </div>}
          <div className='date-picker-head-title'>{title}</div>
        </div>
        <div className='border_1px'></div>
        <DatePickerView
          mode='month'
          minDate={minDate}
          maxDate={maxDate}
          onChange={this.onChange}
          value={value}
        />
      </div>
    );
  }
}

export default MyDatePicker;


