import React from 'react';
import styled from 'styled-components';
import { IoChevronBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function ArrowBackButton({
  width, height, top, left, to,
}) {
  return (
    <LinkArrow to={to} width={width} height={height} top={top} left={left}>
      <StyledArrow />
    </LinkArrow>
  );
}

const LinkArrow = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: var(--radius-regular);
    background-color: rgba(255, 255, 255, 0,4);

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};

    color: var(--color-white);
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }
`;

const StyledArrow = styled(IoChevronBack)`
    color: inherit;
    width: 30%;
    height: 30%;
`;
