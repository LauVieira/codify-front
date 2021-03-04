import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../services/api';

import { error } from '../lib/notify';

import {
  Header, Summary, StudyProgram, ArrowBackButton, Spinner
} from '../components';
import CourseContext from '../contexts/CourseContext';
import UserContext from '../contexts/UserContext';

export default function Course() {
  const [isInitialized, setIsInitialized] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { setFirstEntry } = useContext(UserContext);
  const {
    courseData,
    setCourseData,
    setProgram,
    program,
  } = useContext(CourseContext);

  async function getCourse() {
    try {
      const { data } = await axios.get(`/courses/${id}`);

      setCourseData({ ...data.course });
      setProgram([...data.program]);
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  async function getIfCourseIsInitialized() {
    try {
      const { data } = await axios.get(`/courses/${id}/is-initialized`);

      setIsInitialized(data.initialized);
    } catch (err) {
      error(err.response.data.message);
      console.error(err);
    }
  }

  useEffect(async () => {
    setFirstEntry(false);

    await getIfCourseIsInitialized();
    await getCourse();
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <CoursePage>
          <Spinner
            type="ThreeDots"
            height={150}
            width={150}
            color="#46A7D4"
          />
        </CoursePage>
      </>
    );
  }

  return (
    <>
      <Header />
      <CoursePage>
        <Details background={courseData.background}>
          <ArrowBackButton
            to="/"
            width="50px"
            height="50px"
            left="15px"
            top="20px"
            fontSize="40px"
          />
          <h1> 
            {courseData.title} 
          </h1>
          <p> 
            {courseData.description} 
          </p>
          <Summary courseData={courseData} program={program} isInitialized={isInitialized} />
        </Details>
        <StudyProgram program={program} />
      </CoursePage>
    </>
  );
}

const CoursePage = styled.div`
  min-height: 100vh;
  height: auto;

  background-color: var(--background-color);
  padding-top: 100px;
  padding-bottom: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Details = styled.div`
  width: 100%;
  height: 200px;
  background: ${(props) => `linear-gradient(180deg, ${props.background} 0%, ${props.background}77 100%)`};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 35px;
  position: relative;

  h1 {
    color: #000;
    font-size: 35px;
    font-weight: 700;
  }

  p {
    color: #383838;
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
  }
`;
