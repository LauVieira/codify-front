/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import YoutubePlayer from './YoutubePlayer';
import CheckBox from './CheckBox';
import CourseContext from '../contexts/CourseContext';

export default function StudyAreaContent({ activity, setActivity }) {
  const [isLastChapter, setIsLastChapter] = useState(false);
  const history = useHistory();
  const { id, chapterId, topicId } = useParams();
  const {
    activities, program, chapter, setTopic, setChapter, setActivityIndex, isChecked, setIsChecked, setActivities
  } = useContext(CourseContext);

  function handleClick(act) {
    const i = activities.findIndex((a) => a.id == act.id);
    if (i === activities.length - 1) {
      const j = chapter.topics.findIndex((t) => t.id == topicId);
      if (j === chapter.topics.length - 1) {
        const k = program.findIndex((c) => c.id == chapterId);
        if (k === program.length - 1) {
          setIsLastChapter(true);
        } else {
          setChapter(program[k + 1]);
          setTopic(program[k + 1].topics[0]);
          setActivity(program[k + 1].topics[0].activities[0]);
          setActivityIndex(0);
          history.push(`/curso/${id}/capitulo/${program[k + 1].id}/topico/${program[k + 1].topics[0].id}/atividade/${program[k + 1].topics[0].activities[0].id}`);
        }
      } else {
        setTopic(chapter.topics[j + 1]);
        setActivity(chapter.topics[j + 1].activities[0]);
        setActivityIndex(0);
        history.push(`/curso/${id}/capitulo/${chapterId}/topico/${chapter.topics[j + 1].id}/atividade/${chapter.topics[j + 1].activities[0].id}`);
      }
    } else {
      setActivity(activities[i + 1]);
      setActivityIndex(i + 1);
      history.push(`/curso/${id}/capitulo/${chapterId}/topico/${topicId}/atividade/${activities[i + 1].id}`);
    }
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
                activity={activity}
                setActivityIndex={setActivityIndex}
                setActivities={setActivities}
                activities={activities}
              />
              {(!isLastChapter)
                ? <Button onClick={() => handleClick(activity)}>Avançar</Button>
                : <div />}
            </ContainerBox>
          </Box>
        )
        : <Word>Nao tem atividade</Word>}
    </Container>
  );
}

const Container = styled.section`
  background-color: #2e2e2e;
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
  button{
        width: 25%;
        font-size: 18px;
        color:white-space;
        span::after{
            font-size: 30px;
            top: -5px;
        }
    }
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
