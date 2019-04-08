import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Home from './Home';
import NotFounds from './components/NotFound'
import Edit from './components/Edit'

class App extends Component {

  render(){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      
      
        <Route path={"/opportunity"} exact  name="Home" render={ (routerProps) => < Home routerProps={routerProps}/>} />
        <Route path="/Edit/:edit_id" exact name="Edit" render={ (routerProps) => < Edit routerProps={routerProps}/>}/>
        <Route path="/" exact  name="notfound" render={ (routerProps) => < NotFounds routerProps={routerProps}/>}  />
     
    </BrowserRouter>
    )
  }
}
export default App;