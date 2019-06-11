import React, { Component } from 'react';
import SideNavItem from './SideNavItem';
import '../css/SideNav.css'

export class SideNav extends Component {
    state = {
        navItems: [
            'Calendar',
            'Documentation',
            'Dashboard',
            'Admin Plugins',
            'Admin Forms',
            'Admin Layouts',
            'Information Panels',
            'Ecommerce',
            'UI Elements',
            'Form Elements',
            'Plugins',
            'Pages',
            'Executive Meeting',
            'Help Desk Redesign',
            'Sony Board Meeting'
        ]
    }
    render() {
        return (
            <div className={`dropdown-menu ${this.props.showClass}`}>
                {this.state.navItems.map((navItem, i) => (
                    <SideNavItem key={i} navItem={navItem} activeNavState={this.props.activeNavState} setNavState={this.props.setNavState}/>
                ))}
                
            </div>
        )
    }
}

export default SideNav;
