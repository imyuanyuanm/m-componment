import React, { Component } from 'react';
import './Anchor.scss';

export class Anchor extends Component {
    constructor(props) {
        super(props)
        this.clickNav = this.clickNav.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.flagScroll = true;
    }
    state = {
        navClassList: ['active', '', '', ''],
        ifShow: true,
    };
    clickNav(e) {
        this.flagScroll = false;
        const { navClassList } = this.state;
        const target = e.target;
        const navs = document.querySelectorAll('.nav-link');
        const navLength = navs.length - 1;
        for (let i = 0; i <= navLength; i++) {
            navClassList[i] = 'nav-link';
            if (target === navs[i]) navClassList[i] = 'nav-link active';
        }
        this.setState({ navClassList })
        setTimeout(() => {
            this.flagScroll = true;
        }, 300);
    }
    // 滚动锚点
    handleScroll() {
        if (!this.flagScroll) return;
        if (window.scrollY > 500) {
            this.setState({ ifShow: true })
        } else {
            this.setState({ ifShow: false })
        }
        const { navClassList } = this.state;
        const navs = document.querySelectorAll('.nav-link');
        const navLength = navs.length - 1;
        let current = Math.floor((window.scrollY + 535) / 800);
        if (current <= 0) current = 0;
        if (current >= navLength) current = navLength;
        for (let i = 0; i <= navLength; i++) {
            navClassList[i] = 'nav-link';
            if (current === i) navClassList[i] = 'nav-link active';
        }
        this.setState({ navClassList })
    }

    componentDidMount() {
        window.addEventListener('touchmove', this.handleScroll, false);
        window.addEventListener('scroll', this.handleScroll, false);
    }
    componentWillUnmount() {
        window.removeEventListener('touchmove', this.handleScroll);
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        const props = this.props;
        const { navClassList, ifShow } = this.state;
        return <div className={`anchor ${props.className} ${ifShow ? '' : 'hidden-anchor'}`}>
            <ul className='nav'>
                {props.navs.map((item, index) => {
                    return <a style={{ width: `${100 / props.navs.length}%` }} key={item.id} onClick={this.clickNav} href={`#${item.id}`}><li className={`nav-link ${navClassList[index]}`}>{item.text}</li></a>;
                })}
            </ul>
        </div >
    }
}