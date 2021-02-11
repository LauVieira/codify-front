import React from 'react';
import styled from 'styled-components';

export default function CheckBox({ isChecked, setIsChecked }) {
    return(
        <Label htmlFor='concluded' isChecked={isChecked}>  
            <Check 
                id='concluded' 
                type='checkbox'
                value={isChecked} 
                onChange={() => setIsChecked(!isChecked)}
            />
            <span></span>
            <p> Marcar como concluído </p>
        </Label>
    );
}

const Label = styled.label`
    display: flex;
    align-items: center;

    font-weight: bold;
    color: ${(props) => props.isChecked ? '#76DF93' : '#9D9D9D'};
    font-size: 1.9rem;
    line-height: 2.2rem;
    
    span {
        cursor: pointer;
        display: block;
        width: 23px;
        height: 23px;
        background: transparent;
        border: 1px solid #9D9D9D;
        margin-right: 10px;
    }
`;

const Check = styled.input`
    display: none;

    &:checked + span {
        background: var(--color-green);
        border: 1px solid #76DF93;
    }
`;
