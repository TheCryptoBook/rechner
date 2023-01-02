import React from "react";
import styled from "styled-components";

function Button({ onClick, buttonName, deleteButton }) {
  return (
    <>
      {deleteButton ? (
        <DBTN onClick={onClick}>{buttonName}</DBTN>
      ) : (
        <BTN onClick={onClick}>{buttonName}</BTN>
      )}
    </>
  );
}

const BTN = styled.button`
  min-width: 120px;
  padding: 10px 30px;
  border-radius: 30px;
  background: linear-gradient(to right, #e63f64, #c118ff 100%);
  background-color: #e63f64;
  color: #ffffff;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to left, #e63f64, #c118ff 100%);
    background-color: #dc7eff;
    box-shadow: 4px 5px 30px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 4px 5px 30px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 5px 30px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0px 0px 5px 3px #005cbf;
  }
`;

const DBTN = styled.button`
  min-width: 120px;
  padding: 10px 30px;
  border-radius: 30px;
  background: linear-gradient(to right, #af0808, red 100%);
  background-color: red;
  color: #ffffff;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to left, red, #af0808 100%);
    background-color: red;
    box-shadow: 4px 5px 30px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 4px 5px 30px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 5px 30px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0px 0px 5px 3px #005cbf;
  }
`;

export default Button;
