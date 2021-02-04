/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import CourseRecommendations from '../components/CourseRecommendations';
import css from '../assets/GlobalStyles/root';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Message>
        <p>Olá Pedro!</p>
        <p className="bold">Você não começou nenhum curso ainda.Experimente um! :)</p>
      </Message>
      <CourseRecommendations />
      <div>HOME</div>
    </>
  );
}

const Message = styled.div`
    background-color: var(--color-blue);
    height: 90px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    font-size: 20px;
    .bold{
      font-weight: bold;
    }
`;
