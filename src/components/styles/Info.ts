import styled, { css } from 'styled-components';

export const PageController = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 600px;
`;

export const ImageContainer = styled.section<{ isBaby: boolean }>`
  display: flex;
  width: 100%;
  padding: 10px;
  margin: 10px;
  background-color: lightgray;
  justify-content: center;
  align-items: center;
  & img {
    width: 180px;
    height: 180px;
    padding: 10px;
  }
  & img:last-child {
    ${(props) =>
      !props.isBaby &&
      css`
        width: 120px;
        height: 120px;
        background-color: darkgrey;
      `}
  }
`;
