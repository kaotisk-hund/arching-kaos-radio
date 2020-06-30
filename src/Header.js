import React, { Component } from 'react';
import logo from './assets/img/arching-kaos-radio-logo.gif';
import './App.css';

class Header extends Component {
  render() {
    return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="http://radio.arching-kaos.tk/"
        rel="noopener noreferrer"
      >
        <h2>Arching Kaos Radio</h2>
      </a>
      <p>
        Welcome to Arching Kaos Radio!<br/>Enjoy music!
      </p>
      <span>
        <a href="#mixes">Mixes</a>,
        <a href="#chat">Chat</a>
      </span>
      <hr/>
      {this.props.children}
    </header>
    );
  }
}

export default Header;
