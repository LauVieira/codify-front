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
      <button type="submit" onClick={toggleTheresCourse}>change</button>
      <UserLandingPageContainer>
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
      </UserLandingPageContainer>
    </>
  );
}

const Message = styled.article`
    margin-top:80px;
    background-color: var(--color-blue);
    height: 131px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    font-size: 30px;
    .bold{
      font-weight: bold;
    }
`;
const UserLandingPageContainer = styled.main`
    background-color: #E5E5E5;
    padding-bottom: 50px;
`;
const Title = styled.article`
    width: 75%;
    margin: 0 auto;
    h1{
      margin-top: 50px;
      font-size: 3rem;
      color: var(--color-black);
      font-weight: normal;
    }
`;
