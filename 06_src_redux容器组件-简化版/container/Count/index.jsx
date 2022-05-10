import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  incrementAction,
  decrementAction,
  incrementAsyncActon
} from '../../redux/action'

class CountUI extends Component {
  increment=()=>{
    const val = this.selectNumber.value;
    this.props.jia(val*1)
  }
  decrement=()=>{
    const val = this.selectNumber.value;
    this.props.jian(val*1)
  }
  incrementOdd=()=>{
    const val = this.selectNumber.value;
    if(this.props.count%2===0){
      this.props.jia(val*1)
    }
  }
  incrementAsync=()=>{
    const val = this.selectNumber.value;
    this.props.jiaAsync(val*1,500)
  }
  increment2 = ()=>{
    const val = this.selectNumber.value;
    this.props.jia(val*1)
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={c=>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOdd}>偶数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

export default connect(
  state=>({count:state}),
  {
    jia:incrementAction,
    jian:decrementAction,
    jiaAsync:incrementAsyncActon
  }
)(CountUI);