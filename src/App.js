/*
 * Kaotisk Hund 2019
 * Βασική εφαρμογή του ιστότοπού μας 
 *
 */

import React, { Component } from 'react';
import Header from './Header';
//import RadioPlayer from './RadioPlayer';
import Signature from './Signature';
import ShowList from './ShowList';
//import NowPlaying from './NowPlaying';
import Chat from './Chat';
import Menu from './Menu';
//import Footer from './Footer';
//import MenuContainer from './MenuContainer';
//import IncomingConnection from './IncomingConnection';

// import SsbTest from './ssbTest'

/* Class της εφαρμογής μας που προβάλει τον ιστότοπο του σταθμού μας */

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // old hack
      // radio: document.URL.replace(/\/$/, "").replace("https", "http")+":8000/demo.ogg" /* Θέτουμε την πηγή του σταθμού μας εδώ */
      radio : "https://icecast.arching-kaos.tk/demo.ogg"
    }
  }
  render() {
    /* Η βασική διάταξη της ιστοσελίδας μας */
    return (
      <div className="App">
        <Header>
        <Menu/>
        </Header>
        <ShowList onShowList={this.props.mix}/>
        <Chat/>
        <Signature/>
      </div>
    );
  }
}

export default App;
