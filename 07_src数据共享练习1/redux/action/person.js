import { ADD_PERSON,REMOVE_PERSON } from "../const";
const initPerson=[{id:0,name:'tom',age:18}]

const personAction = (preState=initPerson,action)=>{
  console.log('personAction',action);
  const {type,personObj,personId} = action;
  switch(type){
    case ADD_PERSON:
      return [personObj,...preState]
    case REMOVE_PERSON:
      const persons= preState.filter(item=>{
        return item.id!=personId
      })
      return persons 
    default:
      return preState  
  }
}
export default personAction;