/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

export default function ActivityContainer(props) {
  const {
    done, doing, type, activityItem, setActivity, activities, setActivityIndex,
  } = props;
  const history = useHistory();
  const { id, chapterId, topicId } = useParams();

  function handleClick(activity) {
    const i = activities.findIndex((a) => a.id == activity.id);
    setActivityIndex(i);
    history.push(`/curso/${id}/capitulo/${chapterId}/topico/${topicId}/atividade/${activity.id}`);
  }

  return (
    <>
      <Container onClick={() => handleClick(activityItem)}>
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
  height: 22px;
  width: 22px;
  border-radius:50%;
  background-color: ${(props) => props.isDoing ? '#FFFFFF' : (props.isDone ? '#76DF93' : '#B2B2B2')};
  margin-bottom: 5px;
`;
const ActivityName = styled.div`
font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.isDoing ? '#FFFFFF' : (props.isDone ? '#76DF93' : '#B2B2B2')};
  margin-bottom: 5px;
`;
