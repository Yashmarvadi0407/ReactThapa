
import './App.css';
import {Component} from 'react'

import CardList from './components/card-list/Card-list.component';
import SearchBox from './components/search-box/search-box-component';
class App extends Component {
  constructor(){
    super()
    this.state = {
    monstar:[],
    searchField:""
    }
   console.log("App component");
  }

componentDidMount(){
  console.log("Mounting method");
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((users)=> this.setState(()=>{
    return {
      monstar:users
    }},()=>{
      console.log(this.state);
    }
  ))
} 

onSearchChange=(event)=>{
  console.log(event.target.value);
  const searchField = event.target.value.toLocaleLowerCase()
 
  this.setState({
    searchField
  })
}


  render(){
  const {searchField,monsters} = this.state
  const {onSearchChange}=this
  const filteredMonster=this.state.monstar.filter((monstar)=>{
    return monstar.name.toLocaleLowerCase().includes(this.state.searchField)
  })
  console.log("render method");
  
    return (
      <div className="App">
    
    <SearchBox
    className="search-box"
    onchangeHandler={onSearchChange}
    placeholder="search monsters"></SearchBox>
  <CardList monstar={filteredMonster}></CardList>
      </div>
    )  
  }
  ;
}

export default App;
