import React from 'react';
import styled from 'styled-components';

export default function DropTopics() {
  return (
    <StyledDropTopics />
  );
}

const StyledDropTopics = styled.section`
  position: fixed;
  width: 33%;
  max-height: calc(33vw * 1.09);

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  right: 33%;
  top: 64px;
  position: fixed;
  z-index: 10;

  padding: 10px 15px;

  border-radius: 25px;
  background: var(--color-lightblack);
  box-shadow: var(--shadow-regular);
`;
