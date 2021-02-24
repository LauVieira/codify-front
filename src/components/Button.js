import React from 'react';
import styled, { css } from 'styled-components';
import Spinner from './Spinner';

export default function Button({
  spinner, width, children, isLoading, ...props 
}) {
  return (
    <StyledButton width={width} isLoading={isLoading} {...props}>
      {isLoading
        ? (
          <SpinnerContainer>
            <Spinner
              type="Oval"
              color="#46A7D4"
              width={spinner.tamX || 35}
              height={spinner.tamY || 35}
            />
          </SpinnerContainer>
        )
        : (
          <span>
            {children}
          </span>
        )}
    </StyledButton>
  );
}

const SpinnerContainer = styled.div`
  position: relative;
  top: 2.5px;
`;

const StyledButton = styled.button`
  border-radius: var(--radius-thin);
  background-color: ${({ isLoading }) => (isLoading ? '#FFFFFF' : '#46A7D4')};
  border: ${({ isLoading }) => (isLoading ? '3px solid #46A7D4' : 'none')};

  color: var(--color-white);
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: bold;

  width: ${(props) => props.width || '100%'};
  height: 50px;

  margin-bottom: 10px;

  text-align: center;
  text-transform: lowercase;
  position: relative;

  transition: background-color border color 0.5s linear;
  cursor: ${({ isLoading }) => (isLoading ? 'default' : 'pointer')};

  &::first-letter {
      text-transform: uppercase;
  }

  ${({ isLoading }) => !isLoading && css`
    &:hover, &:focus {
      background-color: var(--color-white);
      color: #46A7D4;
      border: 3px solid #46A7D4;

      span {
        padding-right: 40px;

        &::after {
            opacity: 1;
            right: 0;
        }
      }
    }
  `}

  span {
    position: relative;
    transition: 0.4s linear;

    &::after {
        content: '»';
        position: absolute;
        font-size: 4rem;
        opacity: 0;
        top: -3px;
        right: -40px;
        transition: 0.2s linear;
    }
  }
`;
