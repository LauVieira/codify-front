import React from 'react';
import styled from 'styled-components';

export default function Input({...props}) {
    return (
        <StyledInput {...props}/>
    );
}

const StyledInput = styled.input`
    width: 100%;
    height: 50px;

    border: 2px solid #B4B4B4;
    border-radius: var(--radius-thin);

    color: var(--color-black-light);
    font-size: 2rem;
    line-height: 2.4rem;

    margin-bottom: 12.5px;
    padding-left: 15px;

    transition: all 0.3s ease-in-out;

    &:focus {
        box-shadow: var(--shadow-focus);
        border: var(--border-focus);
    }

    &::placeholder {
        font-weight: bold;
        color: var(--color-grey-light);
        text-transform: lowercase;
    }
`;
