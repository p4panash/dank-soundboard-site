import React, { useState } from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  const [navClass, setNavClass] = useState("")

  const onMouseEvent = (e) => {
    e.preventDefault();
    navClass == "" ? setNavClass("Responsive") : setNavClass("")
  }

  return(
    <div id="Nav" className={navClass}>
      <ul>
        <li><a href={void(0)} className="Icon" onClick={onMouseEvent}>
          <FontAwesomeIcon icon={faBars} />
        </a></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/commands">Commands</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;