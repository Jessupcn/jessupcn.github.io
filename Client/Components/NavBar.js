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
        <Link to={`/about`}>Resume</Link>
      </div>
      <div className="nav-item">
        <Link to={`/about`}>Projects</Link>
      </div>
      <div className="nav-item">
        <Link to={`/about`}>Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
