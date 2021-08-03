import React, { Component } from 'react';
import './App.css';

class MainBody extends Component {
  render() {
    return (
    <MainBody className="App-MainBody">
      {this.props.children}
    </MainBody>
    );
  }
}

export default MainBody;