import styled, { css } from 'styled-components';

export const QuizContainer = styled.section`
  display: flex;
  flex-direction: column;
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
