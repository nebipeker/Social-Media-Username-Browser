import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './container/Home'
import About from './container/About'
import Login from './container/Login'
import Register from './container/Register'
import Addcomment from './container/Addcomment'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="CommenterApplication">
      
        <BrowserRouter>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/register">REGISTER</Link>
              </li>
              <li>
                <Link to="/addcomment"></Link>
              </li>
            </ul>
          </div>
          <Switch>
          
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/addcomment" component={Addcomment} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;