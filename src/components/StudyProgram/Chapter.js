/* eslint-disable no-use-before-define */

import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import Topic from './Topic';

export default function Chapter(props) {
  const [expand, setExpand] = useState(false);
  const { chapter } = props;
  const { topics } = chapter;

  const classesQuantity = getActivityQuantity('theory');
  const exercisesQuantity = getActivityQuantity('exercise');
  const classText = `${classesQuantity} aulas`;
  const exerciseText = `${exercisesQuantity} exercícios`;

  function getActivityQuantity(type) {
    let quantity = 0;

    topics.forEach((topic) => (
      topic.activities.forEach((activity) => {
        if (activity.type === type) quantity += 1;
      })
    ));

    return quantity;
  }

  return (
    <Li onClick={() => setExpand(!expand)}>

      <Overview>

        <OverviewLeft expand={expand}>
          <RiArrowDownSLine />
          {chapter.title}
        </OverviewLeft>

        <OverviewRight>
          <p>{classText}</p>
          <p>•</p>
          <p>{exerciseText}</p>
        </OverviewRight>

      </Overview>

      {expand
      && (
        <DetailsUl>
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic} courseId={chapter.courseId} />
          ))}
        </DetailsUl>
      )}

    </Li>
  );
}

const Li = styled.li``;

const Overview = styled.section`
  color: #656565;
  cursor: pointer;
  display: flex;
  font-size: 2.3rem;
  justify-content: space-between;
  padding: 3rem;
`;

const DetailsUl = styled.ul`
  background-color: #F8F8F8;
  font-size: 1.8rem;
  padding: 3rem;
`;

const OverviewLeft = styled.span`
  align-items: center;
  display: flex;
  font-weight: 700;

  svg {
    font-size: 4rem;
    margin-right: 2rem;
    transform: ${(props) => (props.expand ? 'rotate(180deg)' : '0')};
  }
`;

const OverviewRight = styled.span`
  align-items: center;
  display: flex;

  p {
    margin-left: 1rem;
  }
`;
