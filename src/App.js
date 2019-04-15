import React, { Component } from 'react';
import logo from './logo.svg';
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
    </header>
    );
  }
}

class RadioPlayer extends Component {
  render() {
    return (
      <div className="RadioPlayer">
        <Player audioSource={this.props.audioSource}/>
      </div>
    );
  }
}

class Signature extends Component {
  render(){
    return (
       <p>
         kaotisk hund 2019
       </p>

    );
  }
}

class Player extends Component {
  render() {
    return (
      <audio xmlns="http://www.w3.org/1999/xhtml" controls="controls" preload="none" autoplay >
          <source src={this.props.audioSource} type="application/ogg" />
          Sorry, seems your browser can't open it. Try with VLC http://radio.arching-kaos.tk:8000/demo.ogg
        </audio>
    );
  }
}

class ShowList extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <RadioPlayer audioSource="http://radio.arching-kaos.tk:8000/demo.ogg"/>
        <Signature/>
      </div>
    );
  }
}

export default App;
