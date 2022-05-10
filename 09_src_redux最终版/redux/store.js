// createStore:创建store； combineReduxers:合并reducer, applyMiddleware:异步reducer
import {createStore,applyMiddleware} from 'redux'
//汇总所有reducer
import reducer from './reducers'
// redux-thunk支持异步reducer
import thunk from 'redux-thunk'
// redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
// 暴漏store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))