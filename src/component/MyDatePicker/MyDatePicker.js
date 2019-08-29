import React, { Component } from 'react';
import { DatePickerView } from 'antd-mobile';

import './MyDatePicker.scss';

const defaultValue = new Date(new Date().valueOf() - 3600 * 24 * 30 * 12 * 4 * 1000);

export class MyDatePicker extends Component {
    state = {
        value: defaultValue,
        stap: 0,
        fromDate: defaultValue,
        toDate: defaultValue,
        show: false,
    }
    // 选择日期
    onChange = (date) => {
        this.setState({ value: date })
    }
    // 点击上一步/下一步 上一步: 0 下一步:1
    changeStap = (stap) => {
        const { fromDate, value } = this.state;
        if (stap == 1) {
            this.setState({ fromDate: value })
        } else {
            this.setState({ value: fromDate })
        }
        this.setState({ stap })
    }
    // 点击确认
    clickSure = () => {
        const { fromDate, value } = this.state;
        this.setState({ toDate: value, show: false, stap: 0, value: defaultValue }, () => {
            const { toDate } = this.state;
            const date = { fromDate, toDate }
            this.props.changeDate(date);
        })
    }
    // 点击取消
    clickCancle = () => {
        this.setState({ value: defaultValue, show: false, stap: 0 })
    }
    // 显示piker
    showDatePiker = () => {
        this.setState({ show: true })
    }
    componentDidMount() {
        this.props.getShowDatePiker(this.showDatePiker)
    }
    render() {
        const { value, stap, show } = this.state;
        const title = stap == 0 ? '入职时间' : '离职时间';
        return (
            <div className={`my-date-picker ${!show ? 'my-date-picker-hide' : ''}`}>
                <div className='my-date-picker-head'>
                    {stap == 0 ? <div className='action-box'>
                        <div onClick={this.clickCancle} className='action-pre'>取消</div>
                        <div onClick={() => this.changeStap(1)} className='action-next'>下一步</div>
                    </div> : <div className='action-box'>
                            <div onClick={() => this.changeStap(0)} className='action-pre'>上一步</div>
                            <div onClick={this.clickSure} className='action-next'>确定</div>
                        </div>}
                    <div className='date-picker-head-title'>{title}</div>
                </div>
                <DatePickerView
                    mode='month'
                    minDate={new Date('2000-01-01')}
                    maxDate={new Date()}
                    onChange={this.onChange}
                    value={value}
                />
            </div>
        );
    }
}

export default MyDatePicker;


