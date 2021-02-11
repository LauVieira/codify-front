import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import axios from '../services/api';
import ArrowBackButton from './ArrowBackButton';
import Activity from './Activity';

export default function ActivitesTimeLine() {
  return (
    <>
      <StyledHeader>
        <ActivitiesContainer>
          <h1>nada</h1>
          <Activity />
        </ActivitiesContainer>
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
  border-bottom: 1px solid red;
`;

const ActivitiesContainer = styled.section`
  background-color: blue;
  height: 50%;
  width: 50%;
`;