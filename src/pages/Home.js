import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import {
  Header, CourseRecommendations, LastCourse, UserCourses, Spinner
} from '../components';

import UserContext from '../contexts/UserContext';
import axios from '../services/api';
import { error } from '../lib/notify';

export default function Home() {
  const [lastCourseData, setLastCourseData] = useState(null);
  const [coursesSuggestions, setCoursesSuggestions] = useState(null);
  const [initializedCourses, setInitiliazedCourses] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setCoursesSuggestions([...data]);
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  async function getInitializedCourses() {
    try {
      const { data } = await axios.get('/courses/initialized');
      setInitiliazedCourses([...data]);
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  useEffect(async () => {
    await getLastCourse();
    await getSuggestion();
    await getInitializedCourses();

    setLoading(false);
    return () => setFirstEntry(false);
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <HomePage>
          <Spinner
            type="ThreeDots"
            height={150}
            width={150}
            color="#46A7D4"
          />
        </HomePage>
      </>
    );
  }

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
              <CourseRecommendations coursesData={coursesSuggestions} firstTime={false} />
            </>
          )
          : (
            <CourseRecommendations firstTime />
          )}
      </HomePage>
    </>
  );
}

const Message = styled.article`
  padding-left: 25px;
  background-color: var(--color-blue);

  position: absolute;
  left: 0;
  top: 100px;

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
  min-height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;
