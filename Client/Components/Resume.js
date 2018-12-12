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
          JavaScript, Node.js, Python, HTML, CSS, React, Redux, Express, Sequelize,
          Semantic UI, Git, React-Redux, React-Native, PostgreSQL, Firebase, Unix
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
        <div className="resumeEducation">
          <div className="flex-row">
            <h5>DePaul University</h5>
            <h5>Chicago, IL</h5>
          </div>
          <div className="flex-row">
            <p>M.S. in Management</p>
            <p>Sept. 2015 - Dec. 2016</p>
          </div>
        </div>
        <div>
          <div className="flex-row">
            <h5>University of Michigan</h5>
            <h5>Ann Arbor, MI</h5>
          </div>
          <div className="flex-row">
            <p>B.S. in Environmental Sciences</p>
            <p>Sept. 2010 - May. 2014</p>
          </div>
        </div>
      </div>
      <div className="resumeSection experienceSection">
        <h3>EXPERIENCE:</h3>
        <div className="flex-row">
          <h5>Jessup Engineering Inc.</h5>
          <h5>Rochester Hills, MI</h5>
        </div>
        <div className="flex-row">
          <h5>Operations Manager</h5>
          <h5>June 2014 - Dec. 2017</h5>
        </div>
        <div className="experienceBullets">
          <p>
            - Designed machine layouts for sales presentations using AutoCAD
            2015 based on client specifications, continuously modifying the
            layouts to achieve client approval.
          </p>
          <p>
            - Communicated and worked cross-functionally to meet deliverables in
            a timely manner.
          </p>
          <p>
            - Created financial analysis reporting for upper management
            (President and Controller).
          </p>
        </div>
        <div className="flex-row">
          <h5>Administrative Assistant</h5>
          <h5>Summer 2012, Summer 2013</h5>
        </div>
        <div className="experienceBullets">
          <p>
            - Calculated current machine proposal pricing for prospective
            customers by determining individual machine component/labor costs.
          </p>
          <p>
            - Dynamically updated Excel worksheets to reflect current machine
            costs.
          </p>
          <p>- Organized and updated employee payroll/insurance files.</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
