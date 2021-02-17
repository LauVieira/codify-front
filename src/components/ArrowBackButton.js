import React from 'react';
import styled from 'styled-components';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function ArrowBackButton({
  width, height, top, left, to, fontSize,
}) {
  return (
    <LinkArrow
      to={to}
      width={width}
      height={height}
      top={top}
      left={left}
    >
      <StyledArrow fontSize={fontSize} />
    </LinkArrow>
  );
}

const LinkArrow = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: var(--radius-regular);
    background: rgba(255, 255, 255, 0.4);

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};

    color: var(--color-white);
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover, &:focus {
        background: rgba(255, 255, 255, 0.6);
    }
`;

const StyledArrow = styled(IoChevronBackSharp)`
    color: inherit;
    font-weight: bold;
    font-size: ${(props) => props.fontSize};
`;
