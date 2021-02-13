/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../services/api';
import ActivityContainer from './ActivityContainer';
import ActivityLine from './ActivityLine';

export default function ActivitesTimeLine() {
  const [act, setAct] = useState('');
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    axios
      .get('/courses/topics/1')
      .then((response) => {
        const actvida = response.data.topic.activities.map((i) => {
          i.doing = false;
          i.done = false;
          return i;
        });
        setAct(actvida);
        console.log(actvida);
      })
      .catch(({ response }) => {
        console.error(response);

        alert(response.data);
      });
  }, []);
  console.log(act);

  return (
    <>
      <StyledHeader>
        <Container>
          { act
            ? (
              act.map((a, i) => {
                if (i === act.length - 1) {
                  return <ActivityContainer doing={a.doing} done={a.done} type={a.type} />;
                }

                return (
                  <>
                    <ActivityContainer doing={a.doing} done={a.done} type={a.type} />
                    <ActivityLine doing={a.doing} done={a.done} />
                  </>
                );
              })
            )
            : <p>Not activities</p>}
        </Container>
      </StyledHeader>
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
