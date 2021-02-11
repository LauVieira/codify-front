import React from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

import Logo from './Logo';
import ProfilePicture from './ProfilePicture';

export default function Header() {
  const history = useHistory();

  return (
    <StyledHeader>
      <Navigation>
        <Logo
          color="#333333"
          fontSize="5.6rem"
          lineHeight="6.7rem"
          onClick={() => history.push('/')}
        />

        <NavLink to="/"> Home </NavLink>
        <NavLink to="#" onClick={() => alert('Em construção')}> Cursos </NavLink>
        <NavLink to="#" onClick={() => alert('Em construção')}> Perfil </NavLink>
      </Navigation>

      <ProfilePicture
        onClick={() => alert('Em construção')}
        existPhoto={false}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: white;
  box-shadow: var(--shadow-black);

  height: 100px;
  width: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;

const NavLink = styled(Link)`
  margin: 0 0 0 40px;
  font-size: 2rem;
  color: var(--color-subtitle);

  transition: 0.1s;
  text-transform: lowercase;

  &:hover, &:focus {
    color: var(--color-blue);
  }
  
  &::first-letter {
    text-transform: uppercase;
  }
`;
