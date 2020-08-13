import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {Dishes} from './shared/Dishes';

class App extends Component {

  constructor(props){
    super(props)
    this.state =  {

      dish: Dishes

    }
  }

  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ayan</NavbarBrand>

        </div>

      </Navbar>
      <Menu dishes = {this.state.dish}/>
    
    </div>
  );
  }
}

export default App;
