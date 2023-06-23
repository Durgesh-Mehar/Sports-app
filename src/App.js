import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Matches from './component/Matches';
import MatchDetails from './component/MatchDetails';
import TeamDetails  from './component/TeamDetails';
import UserProfile  from './component/UserProfile';
import Navigation from './Navigation';


const App = () => {
  return (
    <div className='App'>
      {/* <Header/> */}
      <Navigation/>
      
        <Routes>
          
          <Route exact path="/" element={<Matches/>} />
          <Route path="/matches/:matchId" element={<MatchDetails/>} />
          <Route path="/team/:matchId" element={<TeamDetails/>} />
          <Route path="/profile" element={<UserProfile/>} />
        
    </Routes> 
      </div>
  );
};

export default App;
