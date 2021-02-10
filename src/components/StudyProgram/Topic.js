import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

export default function Topic(props) {
  const { title, classes, exercises } = props.topic;
  const [expand, setExpand] = useState(false);

  return (
    <Li onClick={() => setExpand(!expand)}>
      <Overview>
        <OverviewLeft>
          <RiArrowDownSLine />
          {title}
        </OverviewLeft>
        <OverviewRight>
          <p>{classes}</p>
          <p>•</p>
          <p>{exercises}</p>
        </OverviewRight>
      </Overview>

      {expand
      && (
      <Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Details>
      )}
    </Li>
  );
}

const Li = styled.li``;

const Overview = styled.section`
  color: #656565;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  padding: 2rem;
`;
const Details = styled.section`
  font-size: 1.8rem;
  padding: 0 2rem 1rem 3rem;
`;

const OverviewLeft = styled.span`
  align-items: center;
  display: flex;
  font-weight: 700;

  svg {
    font-size: 4rem;
    margin-right: 2rem;
  }
`;

const OverviewRight = styled.span`
  align-items: center;
  display: flex;

  p {
    margin-left: 1rem;
  }
`;
