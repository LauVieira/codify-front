import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri';
import axios from '../services/api';

import Logo from './Logo';
import ProfilePicture from './ProfilePicture';
import UserContext from '../contexts/UserContext';

export default function Header() {
  const { setUser } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  function handleSignOut() {
    axios.post('/users/sign-out')
      .then(() => {
        setUser(null);

        localStorage.clear();
        history.push('/entrar');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <StyledHeader>
      <Navigation>
        <Logo
          color="#333333"
          fontSize="5.6rem"
          lineHeight="6.7rem"
          onClick={() => history.push('/')}
        />

        <NavLink to="/"> home </NavLink>
        <NavLink to="#" onClick={() => alert('Em construção')}> cursos </NavLink>

      </Navigation>
      <Container showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
        <RiArrowDownSLine />
        <ProfilePicture
          existPhoto={false}
        />
        {showMenu && (
          <DropDown showMenu={showMenu}>
            <DropLink to="#" onClick={() => alert('Em construção')}>
              Perfil
            </DropLink>
            <Line />
            <DropLink to="#" onClick={handleSignOut}>
              Sair
            </DropLink>
          </DropDown>
        )}
      </Container>

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
  font-size: 2.5rem;
  color: var(--color-subtitle);

  transition: 0.1s;

  &:hover, &:focus {
    color: var(--color-blue);
  }
  
  &::first-letter {
    text-transform: uppercase;
  }
`;

const DropLink = styled(NavLink)`
  margin: 0;
  display: flex;
  width: 100%;
  line-height: 4.5rem;
  font-size: 2rem;

  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  cursor: pointer;

  svg {
    color: #3d3d3d;
    font-size: 4rem;
    margin-right: 1rem;
    transform: ${(props) => (props.showMenu ? 'rotate(180deg)' : '0')};
  }
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;

  right: 0px;
  top: 100px;
  position: fixed;

  width: 150px;
  padding: 0 8px;

  z-index: 1;

  border-radius: 0px 0px 10px 20px;
  background: var(--color-white);
  box-shadow: var(--shadow-regular);
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #D7D7D7;
`;
