/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ActivityContainer from './ActivityContainer';
import ActivityLine from './ActivityLine';
import StudyAreaContent from './StudyAreaContent';

export default function ActivitesTimeLine({ activities }) {
  const [act, setAct] = useState('');
  const [activity, setActivity] = useState('');
  useEffect(() => {
    const arrayActivities = activities.map((i) => {
      i.doing = false;
      i.done = false;
      return i;
    });
    setAct(arrayActivities);
    setActivity(arrayActivities[0]);
  }, [activities]);

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
                      acti={a}
                      setActivity={setActivity}
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
                      acti={a}
                      setActivity={setActivity}
                    />
                    <ActivityLine doing={a.doing} done={a.done} />
                  </>
                );
              })
            )
            : <p>Not activities</p>}
        </Container>
      </StyledHeader>
      <StudyAreaContent activity={activity} />
    </>
  );
}

const StyledHeader = styled.header`
  background-color: #3D3D3D;
  box-shadow: var(--shadow-black);

  height: 112px;
  width: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  position: relative;
  border-bottom: 1px solid #717171;
`;

const Container = styled.section`
  height: 50%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
