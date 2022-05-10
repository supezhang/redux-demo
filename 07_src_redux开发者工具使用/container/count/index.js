import React, { Component } from 'react'
import {connect} from 'react-redux'
import {incrementAction,decrementAction,asyncIncrementAction} from '../../redux/actions/count'
class CountUI extends Component {
  options = [1,2,3,4,5,6,7,8,9]
  increment = ()=>{
    const num = this.selectVal.value
    this.props.jia(num*1)
  }
  deincrement = ()=>{
    const num = this.selectVal.value
    this.props.jian(num*1)
  }
  oddIncrement = ()=>{
    const num = this.selectVal.value
    if(this.props.qiuhe%2!==0){
      this.props.jia(num*1)
    }    
  }
  asyncIncrement = ()=>{
    const num = this.selectVal.value
    this.props.asyncJia(num*1,500) 
  }
  render() {
    return (
      <div>
        <h2>CountUI组件</h2>
        <h3>personUI组件人数：{this.props.persons.length}</h3>
        <div className="count-area">
          <select ref={c=>this.selectVal=c}>
            {
             this.options.map(num=>{
               return <option value={num} key={num}>{num}</option>
             })
            }
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.deincrement}>-</button>
          <button onClick={this.oddIncrement}>奇数+</button>
          <button onClick={this.asyncIncrement}>异步+</button>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({qiuhe:state.count,persons:state.person}),
  {
    jia:incrementAction,
    jian:decrementAction,
    asyncJia:asyncIncrementAction
  }
)(CountUI)