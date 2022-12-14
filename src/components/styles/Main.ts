import styled, { css } from 'styled-components';

const color: Record<string, string> = {
  normal: '#bdbdaf',
  poison: '#a95c9f',
  psychic: '#f461af',
  grass: '#8bd54f',
  ground: '#ebc856',
  ice: '#97f1ff',
  fire: '#fa5543',
  rock: '#ccbc71',
  dragon: '#8574ff',
  water: '#56adf3',
  bug: '#c4d11f',
  dark: '#7c5f4c',
  fighting: '#894c3b',
  ghost: '#736fcd',
  steel: '#c4c2db',
  flying: '#79a3ff',
  electric: '#fee33a',
  fairy: '#f9adff',
};

export const Card = styled.div`
  position: relative;
  max-width: 120px;
  max-height: 120px;
  background-color: rgb(50, 50, 50);
  text-align: center;
  font-size: 15px;
  border-radius: 5px;
  margin: 10px;
  color: azure;
  & span {
    display: none;
  }
  &:hover {
    background-color: rgb(80, 80, 80);
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
      text-shadow: 2px 2px 2px black;
    }
  }
`;

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 550px;
  width: 100%;
  overflow-y: scroll;
  align-self: center;
  background-color: #cb3737;
  border-radius: 0 0 5px 5px;
  padding: 10px 20px;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #cb3737;
    border-radius: 0 0 5px 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
  }
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
  /* border: solid grey 5px; */
  margin: 5px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 6px 0 rgb(0, 0, 0, 0.5);
  ${(props) =>
    props.big &&
    css`
      width: 100px;
      height: 100px;
      box-shadow: 3px 8px 0 rgb(0, 0, 0, 0.5);
      cursor: pointer;
      &:hover {
        box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
        position: relative;
        top: 2px;
      }
    `}
`;

export const TextDisplay = styled.div<{ small: boolean; type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  line-height: 28px;
  border-radius: 5px;
  background-color: ${(props) => color[props.type] || 'rgb(50, 50, 50)'};
  margin: 0 10px;
  text-align: center;
  color: azure;
  font-size: 20px;
  user-select: none;
  ${(props) =>
    props.small &&
    css`
      width: 150px;
      height: 40px;
      line-height: 15px;
      color: black;
    `}
`;

export const HeadDeco = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #cb3737;
  border-radius: 5px 5px 0 0;
  padding: 20px 10px 10px 10px;
`;

export const InfoMsg = styled.section`
  width: 100%;
  line-height: 300px;
  background-color: #cb3737;
  border-radius: 0 0 5px 5px;
  text-align: center;
  font-size: 30px;
  & p {
    font-size: 20px;
    height: 100px;
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  & input {
    color: azure;
    font-size: 18px;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0 20px;
    font-family: 'Orbitron', sans-serif;
  }
`;

export const AutoCompleteContainter = styled.ul`
  position: absolute;
  z-index: 3;
  width: 300px;
  top: 240px;
  background-color: rgb(50, 50, 50, 0.8);
  list-style: none;
`;

export const AutoComplete = styled.li<{ isFocus?: boolean }>`
  position: relative;
  z-index: 4;
  padding: 5px 20px;
  font-size: 18px;
  background-color: ${(props) => (props.isFocus ? 'rgb(255, 255, 0, 0.7)' : 'rgb(50, 50, 50, 0.8)')};
  &:hover {
    background-color: rgb(255, 255, 0, 0.7);
    color: rgb(50, 50, 50);
    font-weight: bold;
    cursor: pointer;
  }
`;
