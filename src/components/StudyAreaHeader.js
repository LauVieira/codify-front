import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import ArrowBackButton from './ArrowBackButton';
import DropDownTopics from './DropDownTopics';
import axios from '../services/api';
import CourseContext from '../contexts/CourseContext';

export default function StudyAreaHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [courseInfo, setCourseInfo] = useState('');
  const { id, chapterId, topicId } = useParams();
  const {
    activities, setActivities, chapter, setTopic, setChapter,
  } = useContext(CourseContext);
  useEffect(() => {
    axios.get(`/courses/chapters/${chapterId}/topics/${topicId}/activities`)
      .then((response) => {
        console.log(response.data);
        setCourseInfo(response.data);
        setActivities(response.data.topic.activities);
      })
      .catch(({ response }) => {
        console.error(response);

        alert(response.data);
      });
  }, [topicId]);
  return (
    <StyledHeader>
      <ArrowBackButton
        to={`/curso/${id}`}
        width="40px"
        height="40px"
        left="15px"
        top="12px"
        fontSize="30px"
      />
      <ChapterTopicInformation showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
        {courseInfo
          ? (
            <>
              <h1>
                {`${courseInfo.chapter.title} - ${courseInfo.topic.title}`}
              </h1>
              <IoIosArrowDown className="icon" />
            </>
          )
          : <h1>nada</h1>}
      </ChapterTopicInformation>
      {showMenu && <DropDownTopics />}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #161616;
  box-shadow: var(--shadow-black);

  height: 64px;
  width: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const ChapterTopicInformation = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  font-size: 2rem;
  font-weight: bold;

  color: var(--color-grey-study-area);
  font-family: var(--font-roboto);
  line-height: 29px;

  cursor: pointer;

  h1 {
    margin-right: 10px;
  }

  .icon {
    transform: ${(props) => (props.showMenu ? 'rotate(180deg)' : '0')};
    font-size: 2.5rem;
  }
`;
