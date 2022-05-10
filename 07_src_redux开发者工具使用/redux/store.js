import {createStore,combineReducers,applyMiddleware} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
// redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
const allReducer = combineReducers({
  count:countReducer,
  person:personReducer
})
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))