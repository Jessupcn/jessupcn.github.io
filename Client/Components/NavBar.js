import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-item flex-row">
        <div className="NavPic">
          <img src="../../Media/me.jpg" />
        </div>
        <h3>Connor Jessup</h3>
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
        <Link to={`/contact`}>Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
