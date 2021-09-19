import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header_logo" 
          alt="Youtube logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"/>
      </div>

      <div className="header_input">
        <input type="text" />
        <SearchIcon />
      </div>
      
      <div className="header_right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="Justice Mubayiwa"
          src="https://yt3.ggpht.com/yti/APfAmoE1gOjOsyvo07UjkdCTyZ5Sr3kM2CVrN5oiOGJG6A=s88-c-k-c0x00ffffff-no-rj-mo"/>
      </div>
        

    </div>
  )
}

export default Header
