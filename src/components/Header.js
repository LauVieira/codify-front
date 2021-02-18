import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri';

import Logo from './Logo';
import ProfilePicture from './ProfilePicture';

export default function Header() {
  const [expand, setExpand] = useState(false);

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
      <Container onClick={() => setExpand(!expand)}>
        <ArrowIcon expand={expand} />
        <ProfilePicture
          existPhoto={false}
        />
        {expand && (
          <DropDown expand={expand}>
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
  
  &:first-letter {
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

const ArrowIcon = styled(RiArrowDownSLine)`
  color: #3d3d3d;
  font-size: 4rem;
  margin-right: 1rem;
  transform: ${(props) => (props.expand ? 'rotate(180deg)' : '0')};
`;

const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  cursor: pointer;
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
