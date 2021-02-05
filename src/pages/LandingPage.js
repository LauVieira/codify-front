/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import CourseRecommendations from '../components/CourseRecommendations';
import LastCourse from '../components/LastCourse';
import UserCourses from '../components/UserCourses';

export default function LandingPage() {
  const [theresCourse, setTheresCourse] = useState(false);
  function toggleTheresCourse() {
    setTheresCourse(!theresCourse);
  }
  return (
    <>
      <Header />
      <button onClick={toggleTheresCourse}>change</button>
      <Container>
        { theresCourse
          ? (
            <>
              <Message>
                <p>Olá Pedro!</p>
                <p className="bold">Bem-vindo de volta! Continue seu curso atual abaixo :)</p>
              </Message>
              <LastCourse
                title="Javascript do zero!"
                subtitle="Aprenda Javascript do zero ao avançado, com muita prática!"
                image="https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg"
                imageDescription="Picasso"
              />
              <UserCourses />
              <Title><h1>Experimente nossos outros cursos </h1></Title>
              <CourseRecommendations />
            </>
          )
          : (
            <>
              <Message>
                <p>Olá Pedro!</p>
                <p className="bold">Você não começou nenhum curso ainda.Experimente um! :)</p>
              </Message>
              <CourseRecommendations />
            </>
          )}
      </Container>
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
const Container = styled.div`
    background-color: var(--color-white);
    padding-bottom: 50px;
`;
const Title = styled.div`
    width: 75%;
    margin: 0 auto;
    h1{
      margin-top: 50px;
      font-size: 3rem;
      color: var(--color-black);
      font-weight: normal;
    }
`;