import React from 'react';
import styled from 'styled-components';

export default function Headline({ children }) {
  return (
    <SubTitle>
      {children}
    </SubTitle>
  );
}

const SubTitle = styled.h2`
  font-family: var(--font-orienta);
  font-size: 2.75rem;
  line-height: 4rem;

  text-align: center;
  margin-left: -21px;
  color: var(--color-white);
`;
