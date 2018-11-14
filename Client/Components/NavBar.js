import React from 'react';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavTitle">
        <img src="../../Media/me.jpg" className="NavPic" />
        <h3 className="NavBarHeader">Connor Jessup</h3>
      </div>
      <h3 className="NavBarHeader">About</h3>
      <h3 className="NavBarHeader">Resume</h3>
      <h3 className="NavBarHeader">Projects</h3>
      <h3 className="NavBarHeader">Contact</h3>
    </div>
  );
};

export default NavBar;
