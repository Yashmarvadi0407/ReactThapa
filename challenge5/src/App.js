
import './App.css';
import {sum,div,mul,sub} from './Add'

function App() {
  return (
    <div>
    <h1> sum of number is::{sum(10,10)}</h1>
    <h1> sub of number is:: {sub(10,10)}</h1>
    <h1> mul of number is::{mul(10,10)}</h1>
    <h1> div of number is::{div(10,3)}</h1>
    </div>
  )
}

export default App;
