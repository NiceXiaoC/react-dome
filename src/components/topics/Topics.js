import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Table from '../table'

class Topics extends React.Component {
  render() {
    return(
      <Router>
      <div>
      1234
        <ul>
          <li>
            <Link to='/index/mm/cc'>Table</Link>
          </li>
        </ul>
         <Route path='/index/mm/cc' component={Table} />
      </div>
    </Router>
    )
  }
}

export default Topics