import {INCREMENT,DECREMENT,ADD_PERSON} from '../const'
export const incrementReducer = num=>({type:INCREMENT,num})
export const decrementReducer = num=>({type:DECREMENT,num})

export const addPresonReducer = personObj=>({type:ADD_PERSON,personObj})