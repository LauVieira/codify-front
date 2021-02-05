/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

export default function Header() {
  const history = useHistory();

  function goToPage(page) {
    if (page === 'home') {
      history.push('/');
    } else if (page === 'courses') {
      history.push('/cursos');
    } else {
      history.push('/perfil');
    }
  }

  return (
    <Container>
      <Logo onClick={() => goToPage('home')} />
      <Tab onClick={() => goToPage('home')}>Home</Tab>
      <Tab onClick={() => goToPage('courses')}>Cursos</Tab>
      <Tab onClick={() => goToPage('profile')}>Perfil</Tab>
    </Container>
  );
}

const Container = styled.nav`
    background-color: white;
    border-radius: 5px;
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
`;
const Tab = styled.button`
    margin: 0 0 0 40px;
    font-size: 22px;
    color: black;
`;
