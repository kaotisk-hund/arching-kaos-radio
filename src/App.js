/*
 * Kaotisk Hund 2019-2020
 * Βασική εφαρμογή του ιστότοπού μας 
 *
 */

import React, { Component } from 'react';
import Header from './Header';
import Signature from './Signature';
import ShowList from './ShowList';
import Chat from './Chat';
import Menu from './Menu';

/* Class της εφαρμογής μας που προβάλει τον ιστότοπο του σταθμού μας */
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      radio : "https://icecast.arching-kaos.tk/demo.ogg" // Στατική διεύθυνση του βασικού μας stream
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
