const React = require('react');

const { Container } = require('docusaurus/lib/core/CompLibrary.js');

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

const showcase = siteConfig.users.map((user, i) => (
  <a href={user.infoLink} key={i}>
    <img src={user.image} title={user.caption} />
  </a>
));

const Users = () => (
  <div className="mainContainer">
    <Container padding={['bottom', 'top']}>
      <div className="showcaseSection">
        <div className="prose">
          <h1>Who's Using This?</h1>
          <p>This project is used by many folks</p>
        </div>
        <div className="logos">{showcase}</div>
        <p>Are you using this project?</p>
        <a
          href="https://github.com/facebook/docusaurus/edit/master/website/siteConfig.js"
          className="button"
        >
          Add your company
        </a>
      </div>
    </Container>
  </div>
);

module.exports = Users;
