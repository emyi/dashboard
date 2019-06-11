import React, { Component } from 'react';
import SideNav from './SideNav';
import '../css/HamburgerMenu.css';

export class HamburgerMenu extends Component {

    
    render() {
        const activeClass = this.props.hamburgerActiveState ? 'change' : '';
        const showClass = this.props.hamburgerActiveState ? 'show' : '';
        return (
            <div className="col-2 dropdown">
                <button className={`btn btn-secondary pull-right hamburger-menu ${activeClass}`} type="button" data-toggle="collapse" aria-expanded={this.props.hamburgerActiveState} onClick={this.props.toggleHamburgerActiveState}>
                    <div className='hamburger-menu-bar1'></div>
                    <div className='hamburger-menu-bar2'></div>
                    <div className='hamburger-menu-bar3'></div>
                </button>
                
                <SideNav showClass={showClass} activeNavState={this.props.activeNavState} setNavState={this.props.setNavState} />
            </div>
        )
    }
}

export default HamburgerMenu;
