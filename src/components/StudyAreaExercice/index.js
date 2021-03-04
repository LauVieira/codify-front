import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import CheckBox from '../CheckBox';
import Button from '../Button';
import CourseContext from '../../contexts/CourseContext';
import CodeEditor from './CodeEditor';
import TestingArea from './TestingArea';
import Solution from './Solution';

export default function StudyAreaExercice({ activity, setActivity }) {
  const [isLastChapter, setIsLastChapter] = useState(false);
  const [solution, setSolution] = useState(true);
  const [resolution, setResolution] = useState('');
  const history = useHistory();
  const { id, chapterId, topicId } = useParams();
  const {
    activities,
    program,
    chapter,
    setTopic,
    setChapter,
    setActivityIndex,
    isChecked,
    setIsChecked,
    setActivities,
  } = useContext(CourseContext);
  console.log(activity);
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
    <Box>
      <BoxOne>
        <Title>{activity.exercise.title}</Title>
        <Enun dangerouslySetInnerHTML={{ __html: `${activity.exercise.statement}` }} />
        <Example>
          {activity.exercise.example}
        </Example>
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
      </BoxOne>
      <Container>
        {solution
          ? (
            <>
              <CodeEditor
                sampleCode={activity.exercise.sampleCode}
                setSolution={setSolution}
                setResolution={setResolution}
                resolution={resolution}
              />
              <TestingArea tests={activity.exercise.testCode} resolution={resolution} />
            </>
          )
          : <Solution solution={activity.exercise.solution} setSolution={setSolution} />}
      </Container>
    </Box>
  );
}

const BoxOne = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const Box = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;
const ContainerBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  position: absolute;
  bottom: -680px;
  right: 0px;
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
const Title = styled.h1`
    font-size: 33px;
    font-weight: bold;
    color: #ffffff;
    margin: 20px 0 0 20px;
`;
const Enun = styled.p`
    font-size: 17px;
    color: #ffffff;
    margin: 20px 10px 0 20px;
`;
const Example = styled.p`
    font-size: 17px;
    color: #ffffff;
    margin: 20px 10px 0 20px;
`;
