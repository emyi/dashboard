import React, { Component } from 'react';
import '../css/SideNavItem.css';

export class SideNavItem extends Component {
    render() {
        const { props: { navItem } } = this;
        const activeClass = this.props.activeNavState === navItem ? 'active' : '';
        return (
            <button className={`dropdown-item ${activeClass}`} type="button" onClick={this.props.setNavState.bind(this, navItem)}>{navItem}</button>
        )
    }
}

export default SideNavItem
