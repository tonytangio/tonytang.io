import React, { Component } from "react";

import SVGLink from "./SVGLink.js";

import GithubIcon from "./icons/github-icon.svg";
import LinkedInIcon from "./icons/linkedin-icon.svg";
import EmailIcon from "./icons/email-icon.svg";

class Landing extends Component {
  render() {
    return (
      <header id="landing">
        <div id="main-container">
          <div id="greeting">Hi, I'm</div>
          <div id="banner">
            <div id="name">Tony Tang</div>
            <div id="statement">
              <div>Sydney</div>
              <div id="vertical-separator" />
              <div id="roles">
                <div className="role">Software Engineer</div>
                <div className="role">Designer</div>
                <div className="role">Leader</div>
              </div>
            </div>
          </div>
          <div id="under-banner">
            <div id="links">
              <SVGLink SVG={GithubIcon} href="https://github.com/Mysterise" />
              <SVGLink
                SVG={LinkedInIcon}
                href="https://www.linkedin.com/in/tonytangio/"
              />
              <SVGLink SVG={EmailIcon} href="mailto:tonytang.dev@gmail.com" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Landing;
