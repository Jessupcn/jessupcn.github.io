import React from 'react';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavTitleContainer">
        <img src="../../Media/me.jpg" className="NavPic" />
        <h3 className="NavBarHeader">Connor Jessup</h3>
      </div>
      <div className="NavTitleContainer">
        <h3 className="NavBarHeader">About</h3>
      </div>
      <div className="NavTitleContainer">
        <h3 className="NavBarHeader">Resume</h3>
      </div>
      <div className="NavTitleContainer">
        <h3 className="NavBarHeader">Projects</h3>
      </div>
      <div className="NavTitleContainer">
        <h3 className="NavBarHeader">Contact</h3>
      </div>
    </div>
  );
};

export default NavBar;
