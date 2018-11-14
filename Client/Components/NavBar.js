import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-item">
        <img src="../../Media/me.jpg" className="NavPic" />
        <h3 className="NavBarHeader">Connor Jessup</h3>
      </div>
      <div className="nav-item">
        <Link to={`/about`}>About</Link>
      </div>
      <div className="nav-item">
        <Link>Resume</Link>
      </div>
      <div className="nav-item">
        <Link>Projects</Link>
      </div>
      <div className="nav-item">
        <Link>Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
