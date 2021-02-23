/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

export default function ActivityContainer(props) {
  const {
    done, doing, type, acti, setActivity,
  } = props;

  return (
    <>
      <Container onClick={() => setActivity(acti)}>
        <Activity isDone={done} isDoing={doing} />
        <ActivityName isDone={done} isDoing={doing}>{(type === 'theory') ? 'Teoria' : 'Exercicio'}</ActivityName>
      </Container>
    </>
  );
}

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Activity = styled.div`
  height: 25px;
  width: 25px;
  border-radius:50%;
  background-color: ${(props) => props.isDoing ? '#FFFFFF' : (props.isDone ? '#76DF93' : '#B2B2B2')};
  margin-bottom: 5px;
`;
const ActivityName = styled.div`
font-size: 17px;
  font-weight: bold;
  color: ${(props) => props.isDoing ? '#FFFFFF' : (props.isDone ? '#76DF93' : '#B2B2B2')};
  margin-bottom: 5px;
`;
