import React from 'react';
import styled from 'styled-components';

export default function Label({ children, ...props }) {
  return (
    <StyledLabel {...props}>
      { children }
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  &::after {
    content: ':'
  }

  font-weight: bold;
  color: var(--color-grey-light);
  font-size: 2rem;
`;
