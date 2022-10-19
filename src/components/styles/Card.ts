import React from 'react';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  position: relative;
  max-width: 120px;
  max-height: 120px;
  background-color: lightgrey;
  text-align: center;
  font-size: 18px;
  border-radius: 5px;
  margin: 10px;
  & span {
    display: none;
  }
  &:hover {
    background-color: darkgrey;
    transition: 0.5s;
    & img {
      opacity: 0.4;
    }
    & span {
      display: block;
      position: absolute;
      top: 40%;
      width: 100px;
      background: transparent;
      z-index: 2;
      font-weight: bold;
    }
  }
`;

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 700px;
  width: 100%;
  overflow-y: scroll;
  align-self: center;
  background-color: #cb3737;
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  & li {
    height: 120px;
  }
  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;

export const Circle = styled.div<{ color: string; big: boolean }>`
  width: 40px;
  height: 40px;
  background: ${(props) => props.color || 'grey'};
  border-radius: 50%;
  border: solid grey 5px;
  margin: 5px;
  ${(props) =>
    props.big &&
    css`
      width: 100px;
      height: 100px;
    `}
`;

export const NameDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  border-radius: 5px;
  background-color: rgb(50, 50, 50);
  margin: 0 10px;
  text-align: center;
  color: azure;
  font-size: 20px;
  user-select: none;
`;
