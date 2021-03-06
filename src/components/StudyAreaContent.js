/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import YoutubePlayer from './YoutubePlayer';
import CheckBox from './CheckBox';
import CourseContext from '../contexts/CourseContext';
import StudyAreaExercice from './StudyAreaExercice';

export default function StudyAreaContent({ activity, setActivity }) {
  const [isLastChapter, setIsLastChapter] = useState(false);
  const history = useHistory();
  const { id, chapterId, topicId } = useParams();
  const {
    activities,
    program,
    chapter, setTopic, setChapter, setActivityIndex, isChecked, setIsChecked, setActivities,
  } = useContext(CourseContext);

  function handleClick(act) {
    const i = activities.findIndex((a) => a.id === Number(act.id));
    if (i === activities.length - 1) {
      const j = chapter.topics.findIndex((t) => t.id === Number(topicId));
      if (j === chapter.topics.length - 1) {
        const k = program.findIndex((c) => c.id === Number(chapterId));
        if (k === program.length - 1) {
          console.log(k);
          console.log(program.length);
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
                ? (
                  <VideoContainer>
                    <YoutubePlayer link={activity.theory.youtubeLink} />
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
                  </VideoContainer>
                )
                : <Word>No video</Word>)
              : (
                <StudyAreaExercice
                  activity={activity}
                  setActivity={setActivity}
                >
                  oi
                </StudyAreaExercice>
              )}
          </Box>
        )
        : <Word>Nao tem atividade</Word>}
    </Container>
  );
}

const Container = styled.section`
  background-color: #2e2e2e;
  box-shadow: var(--shadow-black);

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width: 100%;
`;
const ContainerBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  width: 100%;
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

const Word = styled.h1`
`;

const VideoContainer = styled.section`
  padding: 100px 20px;
`;