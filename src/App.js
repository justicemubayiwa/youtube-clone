import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Switch,Route} from "react-router";

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app_page'>
        <Sidebar />
        <RecommendedVideos />
      </div>    
      
    </div>
  );
}

export default App;
