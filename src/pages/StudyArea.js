/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

import {
  StudyAreaHeader, ActivitesTimeLine,
} from '../components';
import UserContext from '../contexts/UserContext';

export default function StudyArea() {
  const { user } = useContext(UserContext);
  const [activities, setActivities] = useState('');
  const [courseInfo, setCourseInfo] = useState('');
  const { id } = useParams();
  useEffect(() => {
    axios`/courses/topics/${id}`)
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
      <ActivitesTimeLine activities={activities || []} />
    </>
  );
}

const UserLandingPageContainer = styled.main`
    background-color: #E5E5E5;
    padding-bottom: 50px;
`;
