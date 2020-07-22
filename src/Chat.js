/*
 * Kaotisk Hund 2019
 * Εφαρμογή συνομιλιών του ιστότοπού μας 
 *
 */

import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ircwebclient : "https://kiwiirc.com/nextclient/?settings=ac86fb655de51eb40bd6d884a8d96e64"
    }
  }
  render() {
    /* Η βασική διάταξη της ιστοσελίδας μας */
    return (
        <div id="chat" class="chat">
        <h3>Chat</h3>
        <iframe title="chat" src={this.state.ircwebclient}></iframe>
        </div>
    );
  }
}

export default Chat;
