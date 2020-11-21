/*
 * Kaotisk Hund 2019-2020
 * Εφαρμογή συνομιλιών του ιστότοπού μας, χρησιμοποιώντας web-client
 * της KiwiIRC.com για να συνδεθούμε σε IRC server.
 * Embed KiwiIRC-web client application. We use it to connect to an
 * IRC server.
 * 
 * 
 */

import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ircwebclient : "https://kiwiirc.com/nextclient/?settings=82305268c11cda29b805c33f03156815" // Εδώ βάουμε το link
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
