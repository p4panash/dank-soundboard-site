import React, { useState } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  const [navClass, setNavClass] = useState("")

  const onMouseEvent = (e) => {
    e.preventDefault();
    navClass === "" ? setNavClass("Responsive") : setNavClass("")
  }

  return(
    <div id="Nav" className={navClass}>
      <ul>
        <li><a className="Icon" onClick={onMouseEvent}>
          <FontAwesomeIcon icon={faBars} />
        </a></li>
        <li><NavLink exact activeClassName="Selected" to="/">Home</NavLink></li>
        <li><NavLink exact activeClassName="Selected" to="/commands">Commands</NavLink></li>
        <li><NavLink exact activeClassName="Selected" to="/about">About</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;