import React from 'react';
import "./Sidebar.css";
import SideBarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';


function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={WhatshotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionIcon} title="Subscriptions" />
      
      
    </div>
  )
}

export default Sidebar
