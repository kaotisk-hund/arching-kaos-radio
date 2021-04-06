/*
 * Kaotisk Hund 2019-2021
 * Basic application for our webpage
 *
 */

import React, { Component } from 'react';
import Header from './Header';
import Signature from './Signature';
import ShowList from './ShowList';
import Chat from './Chat';
import Menu from './Menu';

/* Class of our application, returning the radio station's webpage */
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      radio : "http://{$ICECAST_SERVER_NAME}/demo.ogg" // Static link to our main stream source
    }
  }
  render() {
    /* Basic layout of the webpage */
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
