import React from 'react';
import styled from 'styled-components';
import SvgLink from './svgLink';

const StyledNavbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const PageLinks = styled.div`
    display: flex;
    & > * {
        margin-left: 15px;
    }
`;

const ContactLinks = styled.div`
    margin-top: 15px;
    align-self: flex-end;

    & > * {
        margin-left: 15px;
    }
`;

const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <PageLinks>
                {/* <h2>Hello</h2>
                <h2>Login</h2> */}
            </PageLinks>
            <ContactLinks>
                <SvgLink href="https://github.com/Mysterise" SVGPath='/icons/github-icon.svg' />
                <SvgLink
                    href="https://www.linkedin.com/in/tonytangio/"
                    SVGPath='/icons/linkedin-icon.svg'
                />
                <SvgLink href="mailto:tonytang.dev@gmail.com" SVGPath='/icons/email-icon.svg' />
            </ContactLinks>
        </StyledNavbar>
    );
};

export default Navbar;