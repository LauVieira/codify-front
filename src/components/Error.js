import React from 'react';
import styled from 'styled-components';

export default function Error({ children, align, ...props }) {
  return (
    <StyledError align={align} {...props}>
      <p>
        { children }
      </p>
    </StyledError>
  );
}

const StyledError = styled.div`
  width: 100%;
  margin: 5px 0px;

  p {
    color: var(--color-red);
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-align: ${(props) => props.align};
  }
`;
