import React from "react";
import styled from "styled-components";

import SvgLink from "./svgLink";
import GithubSVG from "./icons/github-icon.svg";
import LinkedInSVG from "./icons/linkedin-icon.svg";
import EmailSVG from "./icons/email-icon.svg";

const StyledLanding = styled.div`
  /* Flexbox */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: left;
`;

const Greeting = styled.div`
  font-size: 400%;
  align-self: flex-start;
`;

const Banner = styled.div`
  min-width: 60vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* Gradient */
  background: #ea00ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00dbde, #e900ff);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #00dbde, #ea00ff);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #ffffff;
`;

const Name = styled.div`
  font-size: 500%;
  align-self: flex-start;
  padding-left: 30px;
  padding-bottom: 10px;
`;

const Description = styled.div`
  font-size: 125%;
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
`;

const VerticalSeparator = styled.div`
  background: #ffffff;
  min-width: 2px;
  margin: 0px 1vmax;
`;

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Links = styled.div`
  margin-top: 10px;

  align-self: flex-end;

  & > * {
    margin-left: 10px;
  }
`;

const Landing: React.FC = () => {
  return (
    <StyledLanding>
      <Greeting>Hi, I'm</Greeting>
      <Banner>
        <Name>Tony Tang</Name>
        <Description>
          <div>Sydney</div>
          <VerticalSeparator />
          <Roles>
            <div className="role">Software Engineer</div>
            <div className="role">Designer</div>
            <div className="role">Leader</div>
          </Roles>
        </Description>
      </Banner>
      <Links>
        <SvgLink href="https://github.com/Mysterise" SVGPath={GithubSVG} />
        <SvgLink
          href="https://www.linkedin.com/in/tonytangio/"
          SVGPath={LinkedInSVG}
        />
        <SvgLink href="mailto:tonytang.dev@gmail.com" SVGPath={EmailSVG} />
      </Links>
    </StyledLanding>
  );
};

export default Landing;