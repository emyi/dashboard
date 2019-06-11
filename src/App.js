import React, { Component } from 'react'
import Header from './components/Header';
import MainContent from './components/MainContent';

export class App extends Component {
  state = {
    activeNavState: 'Dashboard',
    hamburgerActiveState: true
  }
  toggleHamburgerActiveState = () => {
    this.setState({ hamburgerActiveState: !this.state.hamburgerActiveState });
  }
  setNavState = (newActiveNavState) => {
    this.setState({ activeNavState: newActiveNavState });
  }
  render() {
    return (
      <div>
        <Header hamburgerActiveState={this.state.hamburgerActiveState} activeNavState={this.state.activeNavState} setNavState={this.setNavState} toggleHamburgerActiveState={this.toggleHamburgerActiveState} />
        <MainContent hamburgerActiveState={this.state.hamburgerActiveState} activeNavState={this.state.activeNavState} />
      </div>
    )
  }
}

export default App;
