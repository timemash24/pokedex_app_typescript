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
  max-width: 600px;
  padding: 10px;
  margin: 10px;
  background: linear-gradient(45deg, transparent 15px, rgb(50, 50, 50) 0);
  justify-content: center;
  align-items: center;
  border-radius: 5px;
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
        background-color: rgb(60, 60, 60);
        border-radius: 10px;
      `}
  }
`;

export const InfoListContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 500px;
  padding: 10px;
  margin: 10px;
  font-size: 18px;
  color: azure;
  background-color: rgb(60, 60, 60);
  & li {
    height: auto;
    padding-bottom: 10px;
  }
`;

export const TypeList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
