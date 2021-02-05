import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';
import { Codify } from '.';

export default function Header() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const words = user.name.split(' ');
  const initialLetters = words.length === 1
    ? `${words[0].charAt()}.`
    : `${words[0].charAt()}. ${words[1].charAt()}.`;

  return (
    <StyledHeader>
      <Navigation>
        <Codify
          color="#333333"
          fontSize="5.6rem"
          lineHeight="6.7rem"
          onClick={() => history.push('/')}
        >
          Codify
        </Codify>

        <NavLink to="/"> Home </NavLink>
        <NavLink onClick={() => alert('Em construção')}> Cursos </NavLink>
        <NavLink onClick={() => alert('Em construção')}> Perfil </NavLink>
      </Navigation>

      <ProfilePicture>
        {' '}
        {initialLetters}
        {' '}
      </ProfilePicture>
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
  color: var(--color-black);

  transition: 0.1s;
  text-transform: lowercase;

  &:hover, &:focus {
    color: var(--color-blue);
  }
  
  &::first-letter {
    text-transform: uppercase;
  }
`;

const ProfilePicture = styled.figure`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  border: 3px solid #46A7D4;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  color: var(--color-blue);
  font-size: 2.5rem;
  letter-spacing: -1.5px;
`;
