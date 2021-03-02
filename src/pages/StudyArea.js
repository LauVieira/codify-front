/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import CourseContext from '../contexts/CourseContext';
import UserContext from '../contexts/UserContext';
import { error } from '../lib/notify'

import {
  StudyAreaHeader, Activities,
} from '../components';

export default function StudyArea() {
  const { setUser } = useContext(UserContext);
  const { id, chapterId, topicId } = useParams();
  const {
    activities,
    setCourseData,
    setProgram,
    setChapter,
    setTopic,
    setActivityIndex,
  } = useContext(CourseContext);

  async function changeLastCourse() {
    try {
      const { data } = await axios.post(`/users/last-course/${id}`);

      setUser({ ...data });
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  function findTopicsActivities(courseProgram) {
    const chapter = courseProgram.find((cap) => cap.id === chapterId);
    setChapter({ ...chapter });
    const topic = chapter.topics.find((top) => top.id === topicId);
    setTopic({ ...topic });
  }

  useEffect(async () => {
    await changeLastCourse();
    axios.get(`/courses/${id}`)
      .then((response) => {
        setCourseData(response.data);
        setProgram(response.data.program);
        findTopicsActivities(response.data.program);
        setActivityIndex(0);
      })
      .catch((err) => {
        error(err.response.data.message);
        console.error(err);
      });
  }, [topicId]);

  return (
    <MainPage>
      <StudyAreaHeader />
      <Activities activities={activities || []} />
    </MainPage>
  );
}

const MainPage = styled.main`
  background-color: #2e2e2e;
  height: calc(100vh + 100px);
`;
