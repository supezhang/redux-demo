import { ADD_PERSON,REMOVE_PERSON } from "../const";
const initPerson = [{id:0,name:'tom',age:12}]
export default function personReducer(preState=initPerson,action){
  const {type,personObj,personId} = action;
  switch(type){
    case ADD_PERSON:
      return [personObj,...preState]
    case REMOVE_PERSON:
      const persons = preState.filter(person=>{
        return person.id==!personId
      })
      return persons
    default:
      return preState  
  }
}