import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Link: Provides declarative, accessible navigation around your application.
 * navigates our application to another route when clicked, just like an anchor tag.
 * But the Link component prevents our entire React application from reloading when we go to different URLs.
 * Instead, only the components that need to change will change.
 */
function NavTabs () {
  return (
    <ul className='nav nav-tabs'>
      <h4>
        Google Books Search & Save Marketplace
      </h4>
      <li className='nav-item'>
        <Link to='/search' className={window.location.pathname === '/search' ? 'nav-link active' : 'nav-link'}>
          Search
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/saved'
          className={window.location.pathname === '/saved' ? 'nav-link active' : 'nav-link'}>
          Saved
        </Link>
      </li>
    </ul>
  )
}

export default NavTabs
