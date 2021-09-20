import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
   <div className="app">
     <Router>
      <Header />
       <Switch>
         <Route path="/search">
           <h1>Search page</h1>
         </Route>
         <Route path="/">
          <h1>Home page</h1>
         </Route>
       </Switch>
     </Router>

   </div>)

      
  //     <Header />
  //     <div className='app_page'>
  //       <Sidebar />
  //       <RecommendedVideos />
  //     </div>    
      
  //   </div>
  // );
}

export default App;
