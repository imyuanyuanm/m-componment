import React, { Component } from 'react';
import './RollList.scss';

let list = [];

export class RollList extends Component {
    state = {
        currentIndex: 0,
    }
    componentDidMount() {
        // 获取list
        list = this.props.list;
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // 改变滚动数据
    changeRollItem = () => {
        let { currentIndex } = this.state;
        const preItem = currentIndex - 1 < 0 ? list[list.length - 1] : list[currentIndex - 1];
        const currentItem = list[currentIndex];
        const nextItem = currentIndex + 1 < list.length ? list[currentIndex + 1] : list[0];
        // 滚动后index++
        this.setState({ preItem, currentItem, nextItem }, () => {
            currentIndex = currentIndex < list.length - 1 ? currentIndex + 1 : 0;
            this.setState({ currentIndex })
        })
    }
    // 改变滚动class 执行滚动过渡动画
    changeLiClass = () => {
        this.setState({
            preClass: 'li-item-pre',
            currentClass: 'li-item-current',
            nextClass: 'li-item-next',
        }, () => {
            setTimeout(() => {
                this.setState({ currentClass: '', nextClass: '', preClass: '' })
            }, 4000)
        })
    }

    // 点击换一换 清除定时器 切换数据 重置定时器
    changeItemClick = () => {
        clearInterval(this.timer)
        this.changeRollItem();
        this.changeLiClass();
        this.timer = setInterval(() => {
            this.changeRollItem();
            this.changeLiClass();
        }, 4000);
    }

    render() {
        const { currentClass, nextClass, preClass, currentItem, nextItem, preItem } = this.state;
        const text = '刚刚投递成功';
        return (
            <div className='roll'>
                <div className="roll-list">
                    {preItem ? <div key={preItem.id} className={`${preClass} li-item li-item-pre`}>
                        <span>{preItem.name}</span>
                        <span>{preItem.phone}</span>
                        <span>{text}</span>
                    </div> : null}
                    {currentItem ? <div key={currentItem.id} className={`${currentClass} li-item li-item-current`}>
                        <span>{currentItem.name}</span>
                        <span>{currentItem.phone}</span>{text}<span></span>
                    </div> : null}
                    {nextItem ? <div key={nextItem.id} className={`${nextClass} li-item li-item-next`}>
                        <span>{nextItem.name}</span>
                        <span>{nextItem.phone}</span>
                        <span>{text}</span>
                    </div> : null}
                </div>
            </div>
        );
    }
}

export default RollList;


