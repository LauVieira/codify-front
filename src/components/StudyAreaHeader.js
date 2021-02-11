import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import axios from '../services/api';

export default function Header() {
  const [oi, setOi] = useState('');
  const history = useHistory();
  useEffect(() => {
    axios
      .get('/courses/topic/1')
      .then((response) => {
        console.log(response.data);
      })
      .catch(({ response }) => {
        console.error(response);

        alert(response.data);
      });
  }, []);

  return (
    <StyledHeader>
      <ChapterTopicInformation>
        <h1>
          idjaisdjasiod
        </h1>
        <IoIosArrowDown className="icon" />
      </ChapterTopicInformation>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #292929;
  box-shadow: var(--shadow-black);

  height: 64px;
  width: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
`;

const ChapterTopicInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 2rem;
  font-weight:bold;
  color: var(--color-grey-study-area);
  font-family: var(--font-roboto);
  line-height: 29px;
  h1 {
    margin-right: 10px;
  }
  .icon{
    top: 38%;
    transform: rotate(0.11deg);
    font-size: 2.5rem;
  }
`;
