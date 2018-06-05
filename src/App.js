import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Headers from './components/header'
import Table from './components/table'
import Index from './components/index'
import Froms from './components/form'
import IndexChild from './components/indexChildren'
import Topics from './components/topics/Topics'

class App extends React.Component {
  constructor(pros) {
    super(pros)
  }
  render() {
    return(
      <Router>
          <div>
            <Headers></Headers>
            <div>
              <ul>
                <li>
                   <Link to="/index">index</Link>
                </li>
                 <li>
                  <Link to="/table">Table</Link>
                </li>
                 <li>
                   <Link to="/form">form</Link>
                </li>
                <li>
                   <Link to="/index/child">child</Link>
                </li>
                <li>
                   <Link to="/index/mmm">child</Link>
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <Route  exact path='/' component={Index}/>
              <Route  exact path='/table' component={Table}/>
              <Route  exact path='/form' component={Froms}/>
              <Route  exact path='/index' component={Index}/>
              <Route  exact path='/index/child' component={IndexChild}/>
              <Route  exact path='/index/mmm' component={Topics}/>
            </div>
        </div>
      </Router>
    )
  }
}

export default App;
