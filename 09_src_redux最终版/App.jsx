import React, { Component } from 'react';
import CountUI from './container/count'
import PersonUI from './container/person'
class App extends Component {
  render() {
    return (
      <div>
        {/* 容器组件 */}
        <CountUI/>
        <hr />
        {/* 容器组件 */}
        <PersonUI/>
      </div>
    );
  }
}

export default App;