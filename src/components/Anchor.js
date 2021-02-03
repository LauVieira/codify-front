import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Anchor({children, path}) {
  return(
    <StyledLink to={path}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
  outline: none;

  margin-top: 20px;

  text-decoration: underline;
  transition: 0.1s;

  &:hover, &:focus {
    color: var(--color-blue);
  }
`;