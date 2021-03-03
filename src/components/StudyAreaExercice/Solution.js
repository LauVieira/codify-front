/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { BsPencil } from 'react-icons/bs';
import CheckBox from '../CheckBox';
import CourseContext from '../../contexts/CourseContext';

export default function Solution({ solution, setSolution }) {
  const {
    activities, setActivityIndex, isChecked, setIsChecked, setActivities,
  } = useContext(CourseContext);

  return (
    <Box>
      <UpBar>
        <Text>Nossa solução</Text>
        <Button onClick={() => setSolution(true)}>
          <p>Seu código</p>
          <BsPencil />
        </Button>
      </UpBar>
      <Editor
        height="79vh"
        defaultLanguage="javascript"
        defaultValue={solution}
        theme="vs-dark"
      />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 80vh;
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
