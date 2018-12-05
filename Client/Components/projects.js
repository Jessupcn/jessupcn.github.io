import React from 'react';
import SingleProject from './SingleProject';

/**
 * Hard-coded project data for easy access
 */
const projects = [
  {
    title: 'SimpleStocks',
    description: `A simple stock web application built using an Express.js server and a React/Redux front end. User's can purchase stocks at their current prices and check their portfolio.`,
    images: [],
    githubLink: 'https://github.com/Jessupcn/TTP-FS-20180728',
    deployedLink: 'https://simple-stocks-ttp.herokuapp.com/',
    borderBottom: true
  },
  {
    title: 'DevBook',
    description:
      'My senior capstone project at Fullstack Academy of Code. A web application that allows users to type and run code and logs the results. During this project, I was highly involved on building the frontend using ReactJS, user authentication, and connecting the frontend to Google Cloud Firestore.',
    images: [],
    githubLink: 'https://github.com/devbook-live/DevBook',
    deployedLink: '',
    borderBottom: true
  },
  {
    title: 'Mr. Mixologist',
    description:
      'My "Stackathon" project at Fullstack Academy of Code. A mobile application that allows users to select ingredients, and using a complex association table, gives back the cocktails that can be created with those ingredients. Created during a 4-day hackathon. Utilizes an Express.js backend and a React-Native mobile frontend. ',
    images: [],
    githubLink: 'https://github.com/MrMixologist',
    deployedLink: '',
    borderBottom: false
  }
];

/**
 * Component
 */

const Projects = () => {
  return (
    <div className="sectionContainer projects">
      <div>
        <h1 className="sectionHeader">Projects</h1>
      </div>
      {projects.map(project => {
        return <SingleProject key={project.title} project={project} />;
      })}
    </div>
  );
};

export default Projects;
