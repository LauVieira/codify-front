/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

import {
  StudyAreaHeader, Activities,
} from '../components';

export default function StudyArea() {
  const [activities, setActivities] = useState('');
  const [courseInfo, setCourseInfo] = useState('');
  const { topicId } = useParams();
  useEffect(() => {
    axios.get(`/courses/topics/${topicId}`)
      .then((response) => {
        setCourseInfo(response.data);
        setActivities(response.data.topic.activities);
      })
      .catch(({ response }) => {
        console.error(response);

        alert(response.data);
      });
  }, []);

  return (
    <>
      <StudyAreaHeader courseInfo={courseInfo || ''} />
      <Activities activities={activities || []} />
    </>
  );
}

const UserLandingPageContainer = styled.main`
    background-color: #E5E5E5;
    padding-bottom: 50px;
`;
