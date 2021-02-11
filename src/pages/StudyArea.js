import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import {
  StudyAreaHeader, ActivitesTimeLine,
} from '../components';
import UserContext from '../contexts/UserContext';

export default function StudyArea() {
  const { user } = useContext(UserContext);

  return (
    <>
      <StudyAreaHeader />
      <ActivitesTimeLine />
      <UserLandingPageContainer />
      {/* </UserLandingPageContainer> */}
    </>
  );
}

const UserLandingPageContainer = styled.main`
    background-color: #E5E5E5;
    padding-bottom: 50px;
`;
