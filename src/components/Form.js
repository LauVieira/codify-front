import React from 'react';
import styled from 'styled-components';

export default function Form({ children, ...props }) {
  return (
    <StyledForm {...props}>
      {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  padding: 40px 20px;
  margin-top: 50px;

  background: var(--color-white);
  border-radius: var(--radius-regular);
  box-shadow: var(--shadow-regular);
`;
