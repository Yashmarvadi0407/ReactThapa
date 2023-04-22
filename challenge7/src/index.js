import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import Countdown from 'react-countdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 ReactDom.render(
  <div>
  <Countdown date={Date.now() + 10000000000} />
  <App></App>
  <button className='btn btn-success'> hello</button>
  </div>
  ,document.getElementById('root')
 )