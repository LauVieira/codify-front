/* eslint-disable react/button-has-type */
import React, { useContext, useRef } from 'react';
import styled, { css } from 'styled-components';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import CheckBox from '../CheckBox';
import CourseContext from '../../contexts/CourseContext';

export default function CodeEditor({
  sampleCode, setSolution, setResolution, resolution, 
}) {
  const {
    activities, setActivityIndex, isChecked, setIsChecked, setActivities,
  } = useContext(CourseContext);
  const editorRef = useRef(null);

  function handleEditorChange(value) {
    setResolution(value);
  }

  return (
    <Box>
      <UpBar>
        <Text>Seu Código</Text>
        <Button onClick={() => setSolution(false)}>
          <p>Ver solução</p>
          <HiOutlineLightBulb />
        </Button>
      </UpBar>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue={resolution || sampleCode}
        theme="vs-dark"
        onChange={handleEditorChange}
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
