import React, { Component } from 'react'
import HamburgerMenu from './HamburgerMenu';
import SearchBar from './SearchBar';
import '../css/Header.css';

export class Header extends Component {
    render() {
        return (
            <header className="row">
                <HamburgerMenu hamburgerActiveState={this.props.hamburgerActiveState} toggleHamburgerActiveState={this.props.toggleHamburgerActiveState} activeNavState={this.props.activeNavState} setNavState={this.props.setNavState} />
                <SearchBar />
                <div className="col-1">
                    <img src="https://via.placeholder.com/60" />
                </div>
            </header>
        )
    }
}

export default Header;
