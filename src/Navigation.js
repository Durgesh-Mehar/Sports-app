import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{backgroundColor: 'ActiveBorder',}}>
      <h2 style={{textAlign:'center', backgroundColor:'highlight'}}>Dream 11</h2>
      <ul style={{textAlign:'center', display:'-webkit-inline-flex'}}>
        
        <div style={{margin:'20px'}}><Link to="/">Home</Link></div>
      
        <div style={{margin:'20px'}}><Link to="/profile">User Profile</Link></div>
        
        {/* <li>
          <div style={{margin:'20px'}}><Link to="/">Contact US</Link></div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
