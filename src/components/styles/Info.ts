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
  font-size: 16px;
  color: azure;
  background-color: rgb(50, 50, 50);
  & li {
    height: auto;
    padding-bottom: 10px;
  }
`;

export const TypeList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;
`;

export const MainInfoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #cb3737;
  border-bottom: solid 1px #cb3737;
  margin: 10px 0;
  & ul {
    padding: 10px 30px;
  }
  & ul:last-child {
    border-left: solid 1px #cb3737;
  }
  & li {
    padding: 5px;
  }
  & span {
    background-color: rgb(100, 100, 100);
    border-radius: 5px;
    padding: 0 7px;
    margin-left: 7px;
  }
`;

export const Description = styled.ul`
  padding: 10px;
  text-align: center;
`;
