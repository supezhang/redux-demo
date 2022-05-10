import { ADD_PERSON,REMOVE_PERSON } from "../const";

export const addPerson = personObj=>({type:ADD_PERSON,personObj})
export const removePerson = personId =>({type:REMOVE_PERSON,personId})