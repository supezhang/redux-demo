
import {INCREMENT,DECREMENT} from '../const';

const initCount = 0;
export default function countReducer(preState=initCount,action){
  const {type,num} = action;
  switch(type){
    case INCREMENT:
      return preState+num
    case DECREMENT:
      return preState-num
    default:
      return preState  
  }
}