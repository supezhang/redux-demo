// import {createStore} from 'redux'
// import Count from './reducer_count'
// export default createStore(Count)

import {createStore,applyMiddleware} from 'redux'
import Count_reducer from './reducer_count'
import thunk from 'redux-thunk'
export default createStore(Count_reducer,applyMiddleware(thunk));