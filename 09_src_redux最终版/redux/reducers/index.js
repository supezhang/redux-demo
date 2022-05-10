// 汇总所有reducer
// createStore:创建store； combineReduxers:合并reducer, applyMiddleware:异步reducer
import {combineReducers} from 'redux'
// 组件服务的reducer
import count from './count'
import person from './person'
//汇总所有reducer
export default combineReducers({
  count,
  person
})