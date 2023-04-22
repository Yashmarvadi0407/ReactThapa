import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {BrowserRouter } from 'react-router-dom'
ReactDom.render(
  <BrowserRouter>
  <div><App></App></div>
  </BrowserRouter>,document.getElementById('root')
)