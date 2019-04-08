import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Home from './Home';
//import NotFounds from './components/NotFound'
//import Edit from './components/Edit'

class App extends Component {

  render(){
    return(
      <Home />
    )
  }
}
export default App;