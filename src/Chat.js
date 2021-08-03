/*
 * Kaotisk Hund 2019-2021
 * Application for instant messaging through the webpages.
 * 
 * We use an iframe to emb our IRC clients' web interface
 * to our webpage.
 * 
 */

import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ircwebclient : "{$IRC_CLIENT}" // Link goes here
    }
  }
  render() {
    /* Basic layout */
    return (
        <div id="chat" class="chat">
        <h3>Chat</h3>
        <iframe title="chat" src={this.state.ircwebclient}></iframe>
        </div>
    );
  }
}

export default Chat;
