import ReactDom from 'react-dom'
import App from './App'
import {BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDom.render(
<BrowserRouter>
    <App></App></BrowserRouter>
  ,document.getElementById('root')
)