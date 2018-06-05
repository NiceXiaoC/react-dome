import React, {
	Component
} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Headers from './components/header'
import Table from './components/table'
import Index from './components/index'
import Froms from './components/form'
import IndexChild from './components/indexChildren'
import Topics from './components/topics/Topics'

class App extends Component {
	render() {
		return(
			<Router>
          <div>
            <Headers></Headers>
            <div>
              <ul className="navBar">
                <li>
                   <NavLink to="/index" activeClassName="selected">index</NavLink>
                </li>
                 <li>
                  <NavLink to="/table" activeClassName="selected">Table</NavLink>
                </li>
                 <li>
                   <NavLink to="/form" activeClassName="selected">form</NavLink>
                </li>
                <li>
                   <NavLink to="/child" activeClassName="selected">child</NavLink>
                </li>
                <li>
                   <NavLink to="/mmm" activeClassName="selected">child</NavLink>
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <Route  exact path='/' component={Index}/>
              <Route  exact path='/table' component={Table}/>
              <Route  exact path='/form' component={Froms}/>
              <Route  exact path='/index' component={Index}/>
              <Route  exact path='/child' component={IndexChild}/>
              <Route  exact path='/mmm' component={Topics}/>
            </div>
        </div>
      </Router>
		)
	}
}

export default App;