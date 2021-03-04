/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { BsPlay } from 'react-icons/bs';
import { runTests } from '@bootcamp-ra/mocha-as-promised';
import CourseContext from '../../contexts/CourseContext';
import TestResults from './TestResults';

export default function TestingArea({ tests, resolution }) {
  const {
    activities, setActivityIndex, isChecked, setIsChecked, setActivities,
  } = useContext(CourseContext);
  const [testResults, setTestResults] = useState('');

  async function testCode() {
    const result = await runTests(resolution, tests);
    console.log(result);
    setTestResults(result.suites[0]);
  }
  return (
    <Box>
      <UpBar>
        <Text>Console</Text>
        <Button onClick={() => testCode()}>
          <p>Rodar testes</p>
          <BsPlay />
        </Button>
      </UpBar>
      <Console>
        {testResults 
          ? (
            <TestResults
              testResults={testResults}
            />
          )
          : <TestText>Rode os testes para verificar seu código</TestText>}
      </Console>
    </Box>
  );
}
const Console = styled.div`
  width: 100%;
  height: 37vh;
  background-color: #1E1E1E;

`;
const TestText = styled.p`
  color: white;
  font-size: 17px;
  padding: 20px;
`;
const Box = styled.div`
  width: 100%;
`;
const UpBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 14px;
    color: #E0E0E0;
  }
`;
const Button = styled.button`
  height: 100%;
  border-radius: 10px;
  background-color: #595959;
  width: 162px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #D6D6D6;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-right: 5px;
  }
`;
const Text = styled.p`
  margin-left: 20px;
`;
