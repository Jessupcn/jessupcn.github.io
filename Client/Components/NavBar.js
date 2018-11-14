import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavTitleContainer">
        <img src="../../Media/me.jpg" className="NavPic" />
        <h3 className="NavBarHeader">Connor Jessup</h3>
      </div>
      <div className="NavTitleContainer">
        <Link to={`/about`} className="NavBarItem">
          About
        </Link>
      </div>
      <div className="NavTitleContainer">
        <Link className="NavBarItem">Resume</Link>
      </div>
      <div className="NavTitleContainer">
        <Link className="NavBarItem">Projects</Link>
      </div>
      <div className="NavTitleContainer">
        <Link className="NavBarItem">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
