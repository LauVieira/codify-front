import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import {
  Header, CourseRecommendations, LastCourse, UserCourses,
} from '../components';
import UserContext from '../contexts/UserContext';
import axios from '../services/api';
import { error } from '../lib/notify';

export default function Home() {
  const [lastCourseData, setLastCourseData] = useState(null);
  const [coursesSuggestions, setCoursesSuggestions] = useState(null);
  const [initializedCourses, setInitiliazedCourses] = useState(null);

  const { user, firstEntry, setFirstEntry } = useContext(UserContext);

  const message = (user.lastCourse !== 0)  
    ? 'Bem-vindo de volta! Continue seu curso atual abaixo :)' 
    : 'Você não começou nenhum curso ainda. Experimente um! :)'; 

  async function getLastCourse() {
    try {
      const { data } = await axios.get(`/courses/${user.lastCourse}`);
      setLastCourseData({ ...data.course });
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  async function getSuggestion() {
    try {
      const { data } = await axios.get('/courses/suggestions');
      setCoursesSuggestions({ ...data });
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  async function getInitializedCourses() {
    try {
      const { data } = await axios.get('/courses/initialized');
      setInitiliazedCourses({ ...data });
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  useEffect(async () => {
    await getLastCourse();
    await getSuggestion();
    await getInitializedCourses();

    return () => setFirstEntry(false);
  }, []);

  return (
    <>
      <Header />
      <HomePage>
        {firstEntry && (
          <Message>
            <p> {user.name} </p>
            <p className="bold"> {message} </p>
          </Message>
        )}

        { user.lastCourse !== 0
          ? (
            <>
              <LastCourse courseData={lastCourseData} firstEntry={firstEntry} />
              <UserCourses coursesData={initializedCourses} />
              <Title><h1>Experimente nossos outros cursos </h1></Title>
              <CourseRecommendations coursesData={coursesSuggestions} />
            </>
          )
          : (
            <>
              <CourseRecommendations />
            </>
          )}
      </HomePage>
    </>
  );
}

const Message = styled.article`
  padding-left: 25px;
  background-color: var(--color-blue);

  position: fixed;
  left: 0;
  top: 100px;
  z-index: 10;

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
  padding: 100px 8% 0 8%;
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
