import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Home from './Home';
import NotFounds from './components/NotFound'
import Edit from './components/Edit'

class App extends Component {

  render(){
    return(
      <BrowserRouter>
      
      
        <Route path="/opportunity/:opportunity_id"  name="Home" component={Home} />
        <Route path="/Edit/:edit_id"  name="Edit" component={Edit} />
        <Route path="/notfound"  name="notfound" component={NotFounds} />
     
    </BrowserRouter>
    )
  }
}
export default App;