import {React} from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDom.render(
  // Proverider 包裹App, 让App所有后代组件都能接收到store
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)