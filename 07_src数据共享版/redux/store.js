
import {createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/persons'
import thunk from 'redux-thunk'
// export default createStore(Count_reducer,applyMiddleware(thunk));

const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer
})

export default createStore(allReducer,applyMiddleware(thunk));