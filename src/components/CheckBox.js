import React from 'react';
import styled from 'styled-components';
import { IoCheckmark } from 'react-icons/io5';

export default function CheckBox({ isChecked, setIsChecked }) {
  function handleClick() {
    setIsChecked(!isChecked);
  }
  return (
    <Label htmlFor="concluded" isChecked={isChecked}>
      <Check
        id="concluded"
        type="checkbox"
        value={isChecked}
        onChange={() => handleClick()}
      />
      <Square>
        <IconCheck isChecked={isChecked} />
      </Square>
      <p> Marcar como concluído </p>
    </Label>
  );
}

const Label = styled.label`
    display: flex;
    align-items: center;
    transition: all 0.15s linear;

    font-weight: bold;
    color: ${(props) => props.isChecked ? '#76DF93' : '#9D9D9D'};
    font-size: 1.9rem;
    line-height: 2.2rem;
`;

const Square = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 23px;
    height: 23px;
    cursor: pointer;

    background: transparent;
    border: 1px solid #9D9D9D;
    margin-right: 10px;
`;

const Check = styled.input`
    display: none;

    &:checked + div {
        transition: all 0.2s linear;
        background: #76DF93;
        border: 1px solid green;
    }
`;

const IconCheck = styled(IoCheckmark)`
    transition: all 0.2s linear;
    color: green;
    opacity: ${(props) => props.isChecked ? 1 : 0};
    z-index: 1;
`;
