/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { BsPlay } from 'react-icons/bs';
import { runTests } from '@bootcamp-ra/mocha-as-promised';
import CourseContext from '../../contexts/CourseContext';
import Test from './Test';

export default function TestingElement({
  testResults,
}) {
  console.log(testResults);

  return (
    <Box>
      { testResults === null
        ? <p>Rode os testes para verificar seu código</p>
        : (
          <ul>
            {testResults.map((t, i) => (
              <Test
                key={i}
                id={i}
                title={t.title}
                state={t.state}
                error={t.error}
              />
            ))}
          </ul>
        )} 
    </Box>
  );
}
const Console = styled.div`
  width: 100%;
  height: 65%;
  background-color: #1E1E1E;
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
