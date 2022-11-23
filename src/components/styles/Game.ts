import styled, { css } from 'styled-components';

export const QuizContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 550px;
  width: 100%;
  align-self: center;
  background-color: #cb3737;
  border-radius: 0 0 5px 5px;
  padding: 10px 20px;
`;

export const QuizChoiceContainer = styled.ul`
  display: grid;
  /* width: 100%; */
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 20px 0;
`;

export const QuizChoice = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  background-color: rgb(50, 50, 50);
  line-height: 28px;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  color: azure;
  font-size: 18px;
  user-select: none;
  &:hover {
    background: grey;
    transition: 0.2s;
    cursor: pointer;
  }
`;

export const GameBtn = styled.span`
  background: yellow;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 4px 8px 0 rgb(0, 0, 0, 0.5);
  margin: 0 20px;
  &:hover {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 550px;
  width: 100%;
  background-color: #cb3737;
  font-size: 20px;
  & p {
    padding: 20px;
  }
`;

export const GameBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 20px 0 50px 0;
`;
