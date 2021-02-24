/* eslint-disable no-param-reassign */
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import ActivityContainer from './ActivityContainer';
import ActivityLine from './ActivityLine';
import StudyAreaContent from './StudyAreaContent';
import CourseContext from '../contexts/CourseContext';

export default function Activities({ activities }) {
  const [act, setAct] = useState('');
  const [activity, setActivity] = useState('');
  const {
    activityIndex,
    setActivityIndex,
    isChecked,
  } = useContext(CourseContext);
  useEffect(() => {
    const arrayActivities = activities.map((activityItem, index) => {
      if (activityIndex === index) {
        activityItem.doing = true;
      } else {
        activityItem.doing = false;
      }
      if (activityItem.activityUsers.length === 0) {
        activityItem.done = false;
      } else if (activityItem.activityUsers[0].done === false) {
        activityItem.done = false;
      } else {
        activityItem.done = true;
      }
      return activityItem;
    });
    setAct(arrayActivities);
    setActivity(arrayActivities[activityIndex]);
  }, [activities, activityIndex]);

  return (
    <>
      <StyledHeader>
        <Container>
          { act
            ? (
              act.map((a, i) => {
                if (i === act.length - 1) {
                  return (
                    <ActivityContainer
                      doing={a.doing}
                      done={a.done}
                      type={a.type}
                      key={a.id}
                      activityItem={a}
                      setActivity={setActivity}
                      setActivityIndex={setActivityIndex}
                      activities={activities}
                    />
                  );
                }

                return (
                  <>
                    <ActivityContainer
                      doing={a.doing}
                      done={a.done}
                      type={a.type}
                      key={a.id}
                      activityItem={a}
                      setActivity={setActivity}
                      setActivityIndex={setActivityIndex}
                      activities={activities}
                    />
                    <ActivityLine doing={a.doing} done={a.done} />
                  </>
                );
              })
            )
            : <p>Not activities</p>}
        </Container>
      </StyledHeader>
      <StudyAreaContent activity={activity} setActivity={setActivity} />
    </>
  );
}

const StyledHeader = styled.header`
  background-color: #202020;
  box-shadow: var(--shadow-black);

  height: 81px;
  width: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  position: relative;
`;

const Container = styled.section`
  height: 50%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
