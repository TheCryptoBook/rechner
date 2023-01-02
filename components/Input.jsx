import React from "react";
import styled from "styled-components";

function Input({ name, placeholder, value, onChange }) {
  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <Label for={name}>{placeholder}</Label>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
  padding: 10px 0 0;
  margin-top: 0px;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 13px;
  color: #9b9b9b;
`;

const InputField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 16px;
  color: #000000;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${Label} {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #c118ff, #e63f64);
    border-image-slice: 1;
    & ~ ${Label} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 13px;
      color: #e63f64;
      font-weight: 700;
    }
  }
`;

export default Input;
