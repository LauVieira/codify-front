import React from 'react';
import styled, { css } from 'styled-components';
import Spinner from './Spinner';

export default function Button({children, loading,...props}) {
    console.log(loading);
    return (
        <StyledButton loading={loading} {...props}>
            {loading ?
                <Spinner
                    type='Oval'
                    color='#46A7D4'
                    width={30}
                    height={30}
                />
                : 
                <span>
                    {children}
                </span>
            }
        </StyledButton>
    );
}

const StyledButton = styled.button`
    border-radius: var(--radius-thin);
    background-color: ${({loading}) => loading ? '#FFFFFF': '#46A7D4'};
    border: ${({loading}) => loading ? '3px solid #46A7D4': 'none'};

    color: var(--color-white);
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-weight: bold;

    width: 100%;
    height: 50px;

    margin-bottom: 10px;

    text-align: center;
    text-transform: lowercase;
    position: relative;

    transition: background-color border color 0.5s linear;
    cursor: ${({loading}) => loading ? 'default': 'pointer'};

    &::first-letter {
        text-transform: uppercase;
    }

    ${({ loading }) => !loading && css`
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
        `
    }

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