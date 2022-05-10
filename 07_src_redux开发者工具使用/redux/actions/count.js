
import { INCREMENT,DECREMENT } from "../const";

export const incrementAction = num=>({type:INCREMENT,num})
export const decrementAction = num=>({type:DECREMENT,num})
export const asyncIncrementAction = (num,time=500)=>{
  return (dispatch)=>{
    setTimeout(function(){
      dispatch(incrementAction(num))
    },time)
  }
}