import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import axios from '../services/api';
import ArrowBackButton from './ArrowBackButton';

export default function Header() {
  const [courseInfo, setCourseInfo] = useState('');
  const history = useHistory();
  useEffect(() => {
    axios
      .get('/courses/topic/5')
      .then((response) => {
        setCourseInfo(response.data);
      })
      .catch(({ response }) => {
        console.error(response);

        alert(response.data);
      });
  }, []);

  return (
    <StyledHeader>
      <ArrowBackButton
        to="#"
        width="40px"
        height="40px"
        left="15px"
        top="9px"
        fontSize="30px"
      />
      <ChapterTopicInformation>
        {courseInfo
          ? (
            <h1>
              {`${courseInfo.chapter.title} - ${courseInfo.topic.title}`}
            </h1>
          )
          : <h1>nada</h1>}
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

  z-index: 1;
  position: relative;
`;

const ChapterTopicInformation = styled.section`
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
