import React from 'react';

/**
 * Component
 */

const Resume = () => {
  return (
    <div className="sectionContainer resume">
      <h1 className="sectionHeader">Resume</h1>
      <div className="resumeSection borderBottom">
        <h3>TECHNOLOGIES:</h3>
        <h5>Proficient:</h5>
        <p>
          JavaScript, Node.js, HTML, CSS, React, Redux, Express, Sequelize,
          Semantic UI, Git, React- Redux, React-Native, PostgreSQL, Firebase
        </p>
        <h5>Knowledgeable:</h5>
        <p>Mocha, Chai, Bootstrap, JQuery, OAuth</p>
      </div>
      <div className="resumeSection borderBottom">
        <h3>EDUCATION:</h3>
        <div className="resumeEducation">
          <div className="flex-row">
            <h5>Fullstack Academy of Code</h5>
            <h5>New York, NY</h5>
          </div>
          <div className="flex-row">
            <p>Immersive Coding Bootcamp</p>
            <p>Jan. 2018 - May. 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
