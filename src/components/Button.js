import React from 'react';
import styled from 'styled-components';

export default function Button({children, ...props}) {
    return (
        <StyledButton {...props}>
            <span>
                {children}
            </span>
        </StyledButton>
    );
}

const StyledButton = styled.button`
    border-radius: var(--radius-thin);
    background-color: var(--color-blue);
    border: 0;

    color: var(--color-white);
    text-align: center;
    font-size: 2.4rem,;
    line-height: 2.8rem;
    font-weight: bold;

    width: 100%;
    height: 60px;

    transition: background border color 0.5s linear;
    cursor: pointer;

    &:hover {
        background: white;
        color: #46A7D4;
        border: 1px solid #46A7D4;
    }

    span {
        position: relative;
        transition: 0.4s linear;
    }
    
    span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -40px;
        transition: 0.4s linear;
    }

    &:hover span {
        padding-right: 30px;
    }

    &:hover span:after {
        opacity: 1;
        right: 0;
    }
`;