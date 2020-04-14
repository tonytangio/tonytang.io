import React from 'react';
import styled from 'styled-components';
import SvgLink from '../common/SvgLink';
import { Link } from 'react-router-dom';
import { getCurrentUser, logout } from '../../services/auth';
import { useState } from 'react';

const StyledNavbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    left: 0;
    top: 0;
    transition: all 1s ease-in-out;
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
    const [currentUser, setCurrentUser] = useState(getCurrentUser());
    console.log(currentUser);
    return (
        <StyledNavbar>
            <PageLinks>
                <Link to='/'>Home</Link>
                {
                    currentUser ? 
                    <> 
                        <span>Hello, <b>{currentUser.username}</b>!</span>
                        <Link to='/' onClick={() => {
                            setCurrentUser(null);
                            logout();
                        }}>Log out</Link>
                        <Link to='/newBlog'>New Blog</Link>
                    </> : 
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </> 
                }
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