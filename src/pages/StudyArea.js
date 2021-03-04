/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import CourseContext from '../contexts/CourseContext';
import UserContext from '../contexts/UserContext';
import { error } from '../lib/notify';

import {
  StudyAreaHeader, Activities, Spinner
} from '../components';

export default function StudyArea() {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(UserContext);
  const { id, chapterId, topicId } = useParams();
  const {
    activities,
    setActivities,
    setCourseData,
    setProgram,
    setChapter,
    setTopic,
    setActivityIndex,
  } = useContext(CourseContext);

  async function initializeCourse() {
    try {
      const { data } = await axios.post(`/users/initialize-course/${id}`);

      setUser({ ...data });
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  function findChapter(courseProgram) {
    const chapter = courseProgram.find((cap) => cap.id === Number(chapterId));
    setChapter({ ...chapter });
  }

  async function getCourse() {
    try {
      const { data } = await axios.get(`/courses/${id}`);
      setCourseData({ ...data.course });
      setProgram([...data.program]);
      findChapter(data.program);
      setActivityIndex(0);
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  async function getChapterTopicAndActivities() {
    try {
      const { data } = await axios.get(`/courses/chapters/${chapterId}/topics/${topicId}/activities`);
      setTopic({ ...data.topic });
      setActivities([...data.topic.activities]);
      setActivityIndex(0);
    } catch (err) {
      console.error(err);
      error(err.response.data.message);
    }
  }

  useEffect(async () => {
    await initializeCourse();
  }, []);

  useEffect(async () => {
    await getCourse();
    await getChapterTopicAndActivities();

    setLoading(false);
  }, [topicId]);

  if (loading) {
    return (
      <StudyAreaPage>
        <Spinner
          type="ThreeDots"
          height={150}
          width={150}
          color="#000000"
        />
      </StudyAreaPage>
    );
  }

  return (
    <StudyAreaPage>
      <StudyAreaHeader />
      <Activities activities={activities} />
    </StudyAreaPage>
  );
}

const StudyAreaPage = styled.main`
  background-color: #2e2e2e;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
