import { ADD_PERSON,REMOVE_PERSON } from "../const";

export const addPersonReducer = personObj=>({type:ADD_PERSON,personObj})
export const removePersonReducer = personId=>({type:REMOVE_PERSON,personId})