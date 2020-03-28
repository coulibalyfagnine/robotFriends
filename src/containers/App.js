import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      robots : [],
      searchField:''
    }
    this.handleChange = this.handleChange.bind(this);
    //console.log("contructor");

  }

  handleChange(e){    
    this.setState({
      searchField:e.target.value
    });
    //let filerRobot = this.state.robots.filter(x => console.log(x));
  }

  componentDidMount(){
    //console.log("componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>{ this.setState({robots:users})  }   )
  }

  render(){
    const {robots, searchField} = this.state;
    let fileredRobot = robots.filter(
                        x => x.name.toLowerCase().includes(
                          searchField.toLowerCase()));
    if(!robots.length){
      return(
        <h1 className='f1 gold b'> Loading... </h1>
      );
    }else{
      return (
        <div className= 'tc'>
          <h1 className='f1 gold b'> Robofriends </h1>
          <SearchBox searchChange={this.handleChange}/>
          
          <Scroll>
            <CardList robots = {fileredRobot}/>
          </Scroll>
        </div>
      );

    }

  }
          
}

export default App;