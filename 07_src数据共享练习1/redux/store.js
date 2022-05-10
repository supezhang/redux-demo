import {createStore,combineReducers} from 'redux'
import countAction from './action/count'
import personAction from './action/person'

const allAction = combineReducers({
  count:countAction,
  person:personAction
})
export default createStore(allAction);