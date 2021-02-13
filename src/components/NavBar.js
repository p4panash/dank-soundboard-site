import React from 'react';
import "./NavBar.css";
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return(
      <div id="Nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/commands">Commands</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;