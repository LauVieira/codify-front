import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../services/api';
import ArrowBackButton from './ArrowBackButton';
import ActivityContainer from './ActivityContainer';
import ActivityLine from './ActivityLine';

export default function ActivitesTimeLine() {
  const activities = [{
    doing: false,
    done: true,
  },
  {
    doing: true,
    done: true,
  },
  {
    doing: false,
    done: true,
  },
  {
    doing: false,
    done: false,
  },
  {
    doing: false,
    done: false,
  }];
  return (
    <>
      <StyledHeader>
        <Container>
          {
            activities.map((a, i) => {
              if (i === activities.length - 1) {
                return <ActivityContainer doing={a.doing} done={a.done} />;
              }

              return (
                <>
                  <ActivityContainer doing={a.doing} done={a.done} />
                  <ActivityLine doing={a.doing} done={a.done} />
                </>
              );
            })
          }
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
