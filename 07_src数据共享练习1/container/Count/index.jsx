import React, { Component } from 'react';
import {incrementReducer,decrementReducer} from '../../redux/reducer/count'
import {connect} from 'react-redux'
class countUI extends Component {
  increment = ()=>{
    const number = this.selectVal.value
    this.props.jia(number*1);
  }
  decrement = ()=>{
    const number = this.selectVal.value
    this.props.jian(number*1);
  }
  oddIncrement = ()=>{
    const number = this.selectVal.value
    if(this.props.count%2==!0){
      this.props.jia(number*1);
    }
  }
  asynIncrement =()=>{
    const number = this.selectVal.value
    setTimeout(()=>{
      this.props.jia(number*1);
    },500)
  }
 componentDidMount(){
  // store.subscribe(state => {
  //   this.setState({})
  // });
 }
  render() {
    // console.log('props',this.props);    
    return (
      <div>
        count
        <h2>count组件</h2>
        <h3>personUI组件人数：{this.props.rens.length}</h3>
        <select ref={c=>this.selectVal=c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.oddIncrement}>奇数+1</button>
        <button onClick={this.asynIncrement}>异步+1</button>
      </div>
    );
  }
}
// export default countUI;
// const mapStateToProps =(state)=>{
//   console.log(state)
//   return {count:state.count}
// }
// const mapActionToProps =(dispatch)=>{
//   console.log(11)
//   return {
//     jia:incrementReducer,
//     jian:decrementReducer
//   }
// }
export default connect(
  state=>({count:state.count,rens:state.person}),
  {
    jia:incrementReducer,
    jian:decrementReducer
  }
)(countUI);