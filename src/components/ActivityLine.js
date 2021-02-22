/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

export default function ActivityLine(props) {
  const { done, doing } = props;
  return (
    <>
      <Line isDone={done} isDoing={doing} />
    </>
  );
}

const Line = styled.div`
  height: 2px;
  width: 107px;
  background-color: ${(props) => props.isDoing ? '#FFFFFF' : (props.isDone ? '#76DF93' : '#B2B2B2')};
  margin-bottom: 20px;
`;
