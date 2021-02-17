import React from 'react';
import styled from 'styled-components';

import {
  StudyAreaHeader, ActivitesTimeLine,
} from '../components';

export default function StudyArea() {
  return (
    <>
      <StudyAreaHeader />
      <ActivitesTimeLine />
      <UserLandingPageContainer />
    </>
  );
}

const UserLandingPageContainer = styled.main`
    background-color: #E5E5E5;
    padding-bottom: 50px;
`;
