import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
ReactDom.render(
  <diV>
  <Provider store={store}>
  <App></App>
  </Provider></diV>,document.getElementById("root")
)