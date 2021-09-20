import React from 'react';
import "./Sidebar.css";
import SideBarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OnDemandVideoIcon from '@material-ui/icons/Subscriptions';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={WhatshotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionIcon} title="Subscriptions" />
      <hr/>
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={OnDemandVideoIcon} title="History" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
      <hr/>
      
      
    </div>
  )
}

export default Sidebar
