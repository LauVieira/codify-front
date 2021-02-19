/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useHistory, Link, useParams } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import axios from '../services/api';
import YoutubePlayer from './YoutubePlayer';
import CheckBox from './CheckBox';

export default function StudyAreaContent({
  activity, setActivity, activities,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { id, chapterId, topicId } = useParams();

  function handleClick() {
    setIsLoading(true);
    const index = activities.indexOf(activity);
    if (index === activities.length - 1) {
      console.log('ultimo');
    } else {
      setActivity(activities[index + 1]);
      setIsLoading(false);
      history.push(`/curso/${id}/capitulo/${chapterId}/topico/${topicId}/atividade/${activities[index + 1].id}`);
    }
    setIsLoading(false);
  }
  return (
    <Container>
      {activity
        ? (
          <Box>
            {activity.type === 'theory'
              ? (activity.theory
                ? <YoutubePlayer link={activity.theory.youtubeLink} />
                : <YoutubePlayer link="https://www.youtube.com/watch?v=BN_8bCfVp88" />)
              : <Word>{activity.id}</Word>}
            <ContainerBox>
              <CheckBox
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                activity={activity.id}
              />
              <Button onClick={handleClick} isLoading={isLoading}>
                Avançar
                {' >>'}
              </Button>
            </ContainerBox>
          </Box>
        )
        : <Word>Nao tem atividade</Word>}
    </Container>
  );
}

const Container = styled.section`
  background-color: #3D3D3D;
  box-shadow: var(--shadow-black);

  height: 82.1vh;
  width: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  position: relative;
`;
const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;
const ContainerBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;
const Word = styled.h1`
  color: red;
`;
const Button = styled.button`
    border-radius: var(--radius-thin);
    background-color: ${({ isLoading }) => (isLoading ? '#FFFFFF' : '#46A7D4')};
    border: ${({ isLoading }) => (isLoading ? '3px solid #46A7D4' : 'none')};

    color: var(--color-white);
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-weight: bold;

    width: 30%;
    height: 50px;

    margin-bottom: 10px;

    text-align: center;
    position: relative;

    transition: background-color border color 0.5s linear;
`;
