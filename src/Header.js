import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
  return (
    <div className="app">
      <h1>I am a header</h1>
      <MenuIcon />
      <img
      className="header_logo" 
      src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="youtube logo"/>
      <input type="text" />
      <SearchIcon />
    </div>
  )
}

export default Header
