/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { BsPlay } from 'react-icons/bs';
import { runTests } from '@bootcamp-ra/mocha-as-promised';
import CourseContext from '../../contexts/CourseContext';

export default function Test({
  id, title, state, error = {}, 
}) {
  return (
    <StyledTests>
      { state === 'passed'
        ? (
          <>
            <TestTitle state={state}>
              <p>
                Teste
                {id + 1}
                :
                {' '}
              </p>
              <p>Sucesso!</p>
            </TestTitle>
            <TestMessage>
              <p>{title}</p>
            </TestMessage>                    
          </>
        )
        : (
          <>
            <TestTitle state={state}>
              <p>
                Teste
                {id + 1}
                :
                {' '}
              </p>
              <p>Erro!</p>
            </TestTitle>
            <TestMessage>
              <p>{error.message}</p>
              <p>
                Detalhes: Esperava retornar 
                {` ${error.expected}`}
                {' '}
                e retornou 
                {` ${error.actual}`}
              </p>
            </TestMessage>                    
          </>
        )}
    </StyledTests>
  );
}
const StyledTests = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 0 20px;
    padding-top: 20px;
    color: white;
    font-size: 17px;
`;

const TestTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    & > p {
        font-size: 0.9em;
        font-weight: bold;
        line-height: 1.4em;
    }
    & > p:last-child {
        color: ${({ state }) => state !== 'passed' ? '#FF9999' : '#A9EEBC'};
        margin-left: 0.5em;
    }
`;

const TestMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > p {
        font-size: 0.9em;
        line-height: 1.4em;
    }
`;
