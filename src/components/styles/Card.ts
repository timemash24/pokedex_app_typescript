import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  max-width: 120px;
  max-height: 120px;
  background-color: lightgrey;
  text-align: center;
  font-size: 20px;
  margin: 10px;
`;

export const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 700px;
  overflow-y: scroll;
  align-self: center;
`;
