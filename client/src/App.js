import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavTabs from './components/NavTabs'
import Search from './components/pages/Search'
import Saved from './components/pages/Saved'
import './App.css'

function App () {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path='/search' component={Search} />
        <Route exact path='/saved' component={Saved} />
      </div>
    </Router>
  )
}

export default App
