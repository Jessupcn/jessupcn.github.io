import React from 'react';

const About = () => {
  return (
    <div className="sectionContainer about">
      <h1 className="sectionHeader">About Me</h1>
      <div className="flex-row aboutContent">
        <div className="aboutImageContainer">
          <img src="../../Media/me.jpg" />
        </div>
        <p className="aboutSectionText">
          I'm Connor Jessup, a Software Engineer currently located in the New
          York City area. After graduating from the University of Michigan with
          a B.S. in Environmental Studies and DePaul University with a M.S. in
          Management, I worked at a small manufacturing company (Jessup
          Engineering Inc.) that my grandfather founded for 2 years. I
          ultimately decided to pursue my passion and transition into Software
          Engineering, and attended Fullstack Academy of Code in 2018. I have been working as a Front End Software Engineer in New York City ever since!
        </p>
      </div>
    </div>
  );
};

export default About;
