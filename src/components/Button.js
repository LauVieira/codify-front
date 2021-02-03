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

    color: var(--color-white);
    text-align: center;
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-weight: bold;

    width: 100%;
    height: 50px;

    margin-bottom: 10px;

    transition: background-color border color 0.5s linear;
    cursor: pointer;

    &:hover, &:focus {
        background-color: white;
        color: #46A7D4;
        border: 2px solid #46A7D4;
        span {
            padding-right: 30px;

            &::after {
                opacity: 1;
                right: 0;
            
            }
        }
    }

    span {
        position: relative;
        transition: 0.4s linear;

        &::after {
            content: '»';
            position: absolute;
            opacity: 0;
            top: 0;
            right: -40px;
            transition: 0.4s linear;
        }
    }
`;