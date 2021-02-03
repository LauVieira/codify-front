import React from 'react';
import styled from 'styled-components';

export default function Headline({children}) {
    return (
        <SubTitle>
            {children}
        </SubTitle>
    );
}

const SubTitle = styled.h2`
  font-family: var(--font-orienta);
  font-size: 3.4rem;
  line-height: 4.1rem;

  color: var(--color-white);
`;