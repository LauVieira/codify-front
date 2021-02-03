import React from 'react';
import styled from 'styled-components';

export default function Input({children, ...props}) {
    return (
        <StyledInput {...props}>
            {children}
        </StyledInput>
    );
}

const StyledInput = styled.input`
    width: 100%;
    height: 60px;

    border: 1px solid #B4B4B4;
    border-radius: var(--radius-thin);

    color: var(--color-black-light);
    font-size: 2.4rem;
    line-height: 2.8rem;

    margin-bottom: 15px;
    padding-left: 15px;

    transition: all 0.3s ease-in-out;

    &:focus {
        box-shadow: var(--shadow-focus);
        border: var(--border-focus);
    }

    &::placeholder {
        font-weight: bold;
        color: var(--color-grey-light);
    }
`;