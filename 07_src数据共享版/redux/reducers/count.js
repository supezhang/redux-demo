
const initState = 0;
export default function Count(preState=initState,action){
  const {type,data} = action;
  switch(type){
    case 'increment':
      return preState + data;
    case 'decrement':
      return  preState - data;
    default:
      return preState;    
  }
}