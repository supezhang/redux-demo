
import { INCREMENT,DECREMENT } from "../const";

export const increment = num=>({type:INCREMENT,num})
export const decrement = num=>({type:DECREMENT,num})
export const asyncIncrement = (num,time=500)=>{
  return (dispatch)=>{
    setTimeout(function(){
      dispatch(increment(num))
    },time)
  }
}