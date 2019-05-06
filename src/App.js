import React, { Component } from 'react';
import Header from './Header';
import RadioPlayer from './RadioPlayer';
import Signature from './Signature';
import ShowList from './ShowList';
import NowPlaying from './NowPlaying';
import MenuContainer from './MenuContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
        <MenuContainer/>
        <RadioPlayer audioSource="http://radio.arching-kaos.tk:8000/demo.ogg"/>
        <NowPlaying/>
        <ShowList/>
        <Signature/>
        </Header>
      </div>
    );
  }
}

export default App;
