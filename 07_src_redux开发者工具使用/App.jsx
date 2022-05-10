import React, { Component } from 'react';
import CountUI from './container/count'
import PersonUI from './container/person'
class App extends Component {
  render() {
    return (
      <div>
        <CountUI/>
        <hr />
        <PersonUI/>
      </div>
    );
  }
}

export default App;