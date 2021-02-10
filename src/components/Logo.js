import React from 'react';
import styled from 'styled-components';

export default function Logo({ ...props }) {
  return (
    <Title {...props}>
      codify
    </Title>
  );
}

const Title = styled.h1`
    font-family: var(--font-zilla);
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: 0.6rem;

    text-transform: lowercase;
    text-align: center;

    color: ${(props) => props.color};
    cursor: pointer;
`;
