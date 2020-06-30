/*
 * Kaotisk Hund 2019
 * Βασική εφαρμογή του ιστότοπού μας 
 *
 */

import React, { Component } from 'react';
import Header from './Header';
import RadioPlayer from './RadioPlayer';
import Signature from './Signature';
import ShowList from './ShowList';
import NowPlaying from './NowPlaying';
import MenuContainer from './MenuContainer';

// import SsbTest from './ssbTest'

/* Class της εφαρμογής μας που προβάλει τον ιστότοπο του σταθμού μας */

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      radio: "http://radio.arching-kaos.tk:8000/demo.ogg" /* Θέτουμε την πηγή του σταθμού μας εδώ */
    }
  }
  render() {
    /* Η βασική διάταξη της ιστοσελίδας μας */
    return (
      <div className="App">
        <Header>
        <RadioPlayer audioSource={this.state.radio}/>
        <NowPlaying/>
        </Header>
        <div class="chat">
	      <h3 id="chat">Chat</h3>
        <iframe src="https://kiwiirc.com/nextclient/?settings=ac86fb655de51eb40bd6d884a8d96e64"></iframe>
        </div>
        <ShowList onShowList={this.props.mix}/>
        <Signature/>
      </div>
    );
  }
}

export default App;
