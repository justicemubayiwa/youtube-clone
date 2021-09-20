import React, {useState} from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';



function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div>
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header_logo" 
          alt="Youtube logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"/>
      </div>
      <div class="header_input" >
        <input onChange={e=> setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <SearchIcon className="header_inputButton" />
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar className="header_icon"
          alt="Justice Mubayiwa"
          src="https://pbs.twimg.com/profile_images/1430749898882777088/jJUWFHl9_400x400.jpg"/>
      </div>
    </div>
    
  </div>
    
  )
}

export default Header
