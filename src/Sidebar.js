import React from 'react';
import "./Sidebar.css";
import SideBarRow from './SideBarRow';

function Sidebar() {
  return (
    <div className="I am a sidebar">
      <h1>I am a sidebar</h1>
      <SideBarRow title="Home" />
      <SideBarRow title="Trending" />
      <SideBarRow title="Subscriptions" />
      <SideBarRow title="Library" />
      <SideBarRow title="History" />
      
    </div>
  )
}

export default Sidebar
