import React from 'react';
import styled from 'styled-components';

const SvgImg = styled.img`  
  width: 5vmin;
  height: 5vmin;
  border-radius: 50%;
  
  transition: transform .5s ease;
  
  &:hover {
    transform: scale(1.5);
  }
`;

interface SvgLinkProps {
  href: string;
  SVGPath: string;
}

const SvgLink: React.FC<SvgLinkProps> = props => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <SvgImg src={props.SVGPath} />
    </a>
  );
};

export default SvgLink;
