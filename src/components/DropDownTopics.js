import React, { useContext } from 'react';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill, RiCheckboxCircleFill } from 'react-icons/ri';
import { useHistory, useParams } from 'react-router-dom';

import CourseContext from '../contexts/CourseContext';

export default function DropDownTopics() {
  const { program } = useContext(CourseContext);
  const { id } = useParams();
  const history = useHistory();

  function redirect(chapterId, topicId, activityId) {
    history.push(`/curso/${id}/capitulo/${chapterId}/topico/${topicId}/atividade/${activityId}`);
  }
  
  return (
    <StyledDropTopics>
      <Scroll>
        {program.map((chapter) => (
          <ul key={chapter.id}> 
            <h2> 
              {chapter.title} 
            </h2>
            {chapter.topics.map((topic) => (
              <ItemLine 
                checked={topic.done} 
                key={topic.id}
                onClick={() => redirect(chapter.id, topic.id, topic.activities[0].id)}
              > 
                {topic.done ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleFill />}
                <p>
                  {topic.title}
                </p>
              </ItemLine> 
            ))}
          </ul> 
        ))}
      </Scroll>
    </StyledDropTopics>
  );
}

const StyledDropTopics = styled.section`
  width: 33%;

  right: 33%;
  top: 64px;
  position: absolute;
  z-index: 10;

  padding: 20px 15px 5px 20px;

  border-bottom-left-radius: var(--radius-strong);
  border-bottom-right-radius: var(--radius-strong);

  background: var(--color-lightblack);
  box-shadow: var(--shadow-regular);

  ul {
    margin-bottom: 15px;
  }

  h2 {
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 1.8rem;
  }
`;

const ItemLine = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;

  svg {
    color: ${(props) => (props.checked ? '#76DF93' : '#CFCFCF')};
    font-size: 1.6rem;
    margin-right: 15px;
    margin-left: 10px; 
  }

  p {
    color: var(--color-grey-study-area);
    font-weight: 300;
    font-size: 1.6rem;
  }
`;

const Scroll = styled.div`
  max-height: 350px;
  height: auto;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #5B5B5B;
  }

  &::-webkit-scrollbar-track-piece {
    display: none;
  }
`;
