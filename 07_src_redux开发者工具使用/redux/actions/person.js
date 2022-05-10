import { ADD_PERSON,REMOVE_PERSON } from "../const";

export const addPersonAction = personObj=>({type:ADD_PERSON,personObj})
export const removePersonAction = personId =>({type:REMOVE_PERSON,personId})