import React from 'react';

const Contact = () => {
  return (
    <div className="sectionContainer contact">
      <h1 className="sectionHeader">Contact Me</h1>
      <div className="contactLogoContainer flex-row">
        <a href="https://www.linkedin.com/in/connor-jessup/">
          <img src="../../Media/linkedin.png" />
        </a>
        <a href="https://github.com/Jessupcn">
          <img src="../../Media/github.png" />
        </a>
        <a href="mailto:jessupcn@gmail.com">
          <img src="../../Media/mail.png" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
