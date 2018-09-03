import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home, Foo, Bar } from './component';
import Router from './context-route/router';
import Route from './context-route/route';
import Link from './context-route/link';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <Link to='/'>home</Link><br />
            <Link to='/foo'>foo</Link><br />
            <Link to='/bar'>bar</Link>
            <Route path='/' component={Home} exact/>
            <Route path='/foo' component={Foo} exact/>
            <Route path='/bar' component={Bar} exact/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
