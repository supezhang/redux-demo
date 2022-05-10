import React, { Component } from 'react'
import store from '../../redux/store'
import { decrementAction,incrementAction,incrementAsyncActon } from '../../redux/action';
export default class index extends Component {

  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  increment=()=>{
    const val = this.selectNumber.value;
    store.dispatch(incrementAction(val*1))
  }
  decrement=()=>{
    const val = this.selectNumber.value;
    store.dispatch(decrementAction(val*1))
  }
  incrementOdd=()=>{
    const val = this.selectNumber.value;
    if(store.getState()%2===0){
      store.dispatch(incrementAction(val*1))
    }
  }
  incrementAsync=()=>{
    const val = this.selectNumber.value;
    store.dispatch(incrementAsyncActon(val*1,500))
  }
  increment2 = ()=>{
    const val = this.selectNumber.value;
    store.dispatch(incrementAction(val*1))
  }
  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={c=>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment2}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOdd}>偶数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
