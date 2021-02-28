import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import {
  Header, CourseRecommendations, LastCourse, UserCourses,
} from '../components';
import UserContext from '../contexts/UserContext';

export default function Home() {
  const { user } = useContext(UserContext);
  const [theresCourse, setTheresCourse] = useState(true);

  return (
    <>
      <Header />
      <HomePage>
        { theresCourse
          ? (
            <>
              <Message>
                <p>{user.name}</p>
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
                <p>{user.name}</p>
                <p className="bold">Você não começou nenhum curso ainda. Experimente um! :)</p>
              </Message>
              <CourseRecommendations />
            </>
          )}
      </HomePage>
    </>
  );
}

const Message = styled.article`
  padding-left: 50px;
  background-color: var(--color-blue);

  height: 100px;
  width: 100%;

  color: white;
  font-size: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .bold {
    font-weight: bold;
  }
`;

const HomePage = styled.main`
  background-color: #E5E5E5;
  padding: 100px 10% 0 10%;
`;

const Title = styled.article`
  width: 75%;
  margin: 0 auto;

  h1 {
    margin-top: 50px;
    font-size: 3rem;
    color: var(--color-black);
    font-weight: normal;
  }
`;
