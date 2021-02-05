import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import StudyProgram from './StudyProgram';

export default function Course() {
  return (
    <TemporaryDiv>
      <StudyProgram />
    </TemporaryDiv>
  );
}

const TemporaryDiv = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  width: 85vw;
`;
