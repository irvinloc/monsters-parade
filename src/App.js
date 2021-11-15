import { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class  App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Im Iñaki',
      monsters: [
        {name:'Frankenstein', id: '0001'},
        {name:'Draculas', id: '0002'},
        {name:'Zombie', id: '0003'},
        {name:'Monstruo de las Galletas', id: '0004'},
      ],
      users: [],
      inputValue:''
    }
    // this.reverse = this.reverse.bind(this);
    // this.setSearchedText = this.setSearchedText.bind(this);
    
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({users, monsters:users}))
  }
  // reverse() {
  //   // eslint-disable-next-line react/no-direct-mutation-state
  //   this.setState(prevState => ({
  //     monsters: prevState.monsters.map((el)=> {return {...el, name: el.name.split('').reverse().join('')}})
  //   }));
    
  // }
  // selectedMonsters() {
  //   return this.state.monsters.filter((el)=>el.search(this.state.inputValue))
    
  // }
  setSearchedText=(evt)=> {
    this.setState(prevState=> ({
      inputValue: evt.target.value
    }));
    
  }
  
  render() {
    const {monsters, inputValue} =this.state;
    const selectedMonsters = monsters.filter(m=>m.name.toLowerCase().includes(inputValue.toLowerCase()));
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">monster rolodex</div>
          <SearchBox inputValue={this.state.inputValue} handleChange={this.setSearchedText} 
            placeholder = "Search robot"
          />
          <p></p>
          <p></p>
          <CardList monsters={selectedMonsters}></CardList>
          
        </header>
        
      </div>
    );
  }
  
  
}

export default App;
