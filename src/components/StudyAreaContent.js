/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import YoutubePlayer from './YoutubePlayer';
import CheckBox from './CheckBox';
import CourseContext from '../contexts/CourseContext';

export default function StudyAreaContent({ activity, setActivity }) {
  const [isChecked, setIsChecked] = useState(false);
  const history = useHistory();
  const { id, chapterId, topicId } = useParams();
  const {
    activities, program, setChapter, setTopic, chapter,
  } = useContext(CourseContext);

  useEffect(() => {
    const c = program.find((cap) => cap.id == chapterId);
    setChapter(c);
    const t = c.topics.find((top) => top.id == topicId);
    setTopic(t);
  }, []);
  
  function handleClick(act) {
    const i = activities.findIndex((a) => a.id == act.id);
    if (i === activities.length - 1) {
      const j = chapter.topics.findIndex((t) => t.id == topicId);
      setTopic(chapter.topics[j + 1]);
      setActivity(chapter.topics[j + 1].activities[0]);
      history.push(`/curso/${id}/capitulo/${chapterId}/topico/${chapter.topics[j + 1].id}/atividade/${chapter.topics[j + 1].activities[0].id}`);
    } else {
      setActivity(activities[i + 1]);
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
                activity={activity.id}
              />
              <Button onClick={() => handleClick(activity)}>Avançar</Button>
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
