import React from 'react';
import styled from 'styled-components';

export default function Error({ children, ...props }) {
  return (
    <StyledError {...props}>
      { children }
    </StyledError>
  );
}

const StyledError = styled.div`
  color: var(--color-red);
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin: 10px auto;
`;
