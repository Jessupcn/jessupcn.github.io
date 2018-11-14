import React from 'react';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavTitleContainer">
        <img src="../../Media/me.jpg" className="NavPic" />
        <h3 className="NavBarHeader">Connor Jessup</h3>
      </div>
      <h3 className="NavBarHeader NavTitleContainer">About</h3>
      <h3 className="NavBarHeader NavTitleContainer">Resume</h3>
      <h3 className="NavBarHeader NavTitleContainer">Projects</h3>
      <h3 className="NavBarHeader NavTitleContainer">Contact</h3>
    </div>
  );
};

export default NavBar;
