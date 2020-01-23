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
          Semantic UI, Git, React-Redux, React-Native, PostgreSQL, Firebase
        </p>
        <h5>Knowledgeable:</h5>
        <p>Python, JQuery, Meteor, MongoDB, Mocha, Chai, Bootstrap, OAuth, Enzyme, Jest, Mocha, Chai</p>
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
          <h5>New York Life Insurance</h5>
        </div>
        <div className="flex-row">
          <h5>Front End Engineer</h5>
          <h5>May 2019 - present</h5>
        </div>
        <div className="experienceBullets">
          <p>
            Tech stack: Javascript, React, Redux, Node.js, AWS, HTML, CSS, Material-UI, Enzyme, Jest
          </p>
          <p>
            - Developed the front-end of a performant, React-based single page web application that allows internal clients to manage insurance cases, effectively handling over 100 data inputs.
          </p>
          <p>
            - Implemented a complex Redux state-management system involving chaining asynchronous backend calls to interact with the database through a REST API.
          </p>
          <p>
          - Built custom error-handling functions to check response codes and populate modals to inform users of both errors and success upon data modification.
          </p>
          <p>
          - Wrote unit tests to ensure all edge cases are handled and the code is working as predicted before release.
          </p>
          <p>
          - Collaborated with Product teams, practicing Agile methodology to efficiently plan and meet deliverables.
          </p>
        </div>
        <br />

        <div className="flex-row">
          <h5>Rally Date</h5>
        </div>
        <div className="flex-row">
          <h5>Front End Engineer</h5>
          <h5>February 2019 - May 2019</h5>
        </div>
        <div className="experienceBullets">
          <p>
            Tech stack: HTML, CSS, Javascript, Meteor, MongoDB
          </p>
          <p>
            - Lead the development of UI screens for a future mobile application, utilizing HTML and CSS to transform guidelines from the Product Designer into a fluid front-end.
          </p>
          <p>
            - Manage routing and event-handling logic within the application using JavaScript.
          </p>
        </div>
        <br />

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
