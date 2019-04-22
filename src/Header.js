import React, { Component } from 'react';
import logo from './assets/img/arching-kaos-radio-logo.gif';
import './App.css';

class Header extends Component {
  render() {
    return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to Arching Kaos Radio. Enjoy music!
      </p>
      <a
        className="App-link"
        href="http://radio.arching-kaos.tk/"
        rel="noopener noreferrer"
      >
        Arching Kaos Radio
      </a>
      {this.props.children}
    </header>
    );
  }
}

export default Header;