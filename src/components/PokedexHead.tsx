/* eslint-disable default-case */
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { filterPokemons } from 'app/pokemonSlice';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AutoComplete, AutoCompleteContainter, Circle, HeadDeco, SearchForm, TextDisplay } from './styles/Main';

type Props = {
  text: string;
  isInput: boolean;
};

function PokedexHead({ text, isInput }: Props) {
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector((state) => state.pokemons.pokemonList);
  const autoRef = useRef<HTMLUListElement>(null);
  const [textToSearch, setTextToSearch] = useState<string>('');
  const [matchedList, setMatchedList] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(filterPokemons(matchedList.map((name) => name.toLowerCase())));
    setTextToSearch('');
  };

  const handleTextToSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setTextToSearch(text);

    const newMatchedList: string[] = [];
    if (text !== '') {
      const regex = RegExp(`^${text}`);
      pokemonList.forEach((pokemon) => {
        if (regex.test(pokemon.name)) newMatchedList.push(pokemon.name);
      });
    }

    setMatchedList(newMatchedList);
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    dispatch(filterPokemons([target.innerText.toLowerCase()]));
    setMatchedList([]);
    setTextToSearch('');
  };

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (matchedList.length) {
      switch (e.key) {
        case 'ArrowDown':
          setIndex(index + 1);
          if (autoRef.current?.childElementCount === index + 1) setIndex(0);
          break;
        case 'ArrowUp':
          setIndex(index - 1);
          if (index <= 0) {
            setMatchedList([]);
            setIndex(-1);
          }
          break;
        case 'Enter':
          e.preventDefault();
          if (index === -1) {
            dispatch(filterPokemons(matchedList.map((name) => name.toLowerCase())));
          } else {
            dispatch(filterPokemons([matchedList[index].toLowerCase()]));
            setTextToSearch('');
          }
          setMatchedList([]);
          setIndex(-1);
          break;
        case 'Escape':
          setMatchedList([]);
          setIndex(-1);
          break;
      }
    }
  };

  return (
    <HeadDeco>
      {/* <Link to="/minigame">minigame</Link> */}
      <Circle color="blue" big onClick={() => navigate('/minigame')} />
      <Circle color="red" big={false} />
      <Circle color="yellow" big={false} />
      <Circle color="green" big={false} />
      <TextDisplay small={false} type="" onKeyDown={handleKeyArrow}>
        {isInput ? (
          <SearchForm onSubmit={onSubmit}>
            <input type="text" placeholder={text} value={textToSearch} onChange={handleTextToSearch} />
          </SearchForm>
        ) : (
          <span>{text}</span>
        )}
        <AutoCompleteContainter ref={autoRef}>
          {matchedList.map((name, i) => (
            <AutoComplete key={name} isFocus={index === i} onClick={onClick}>
              {name}
            </AutoComplete>
          ))}
        </AutoCompleteContainter>
      </TextDisplay>
    </HeadDeco>
  );
}

export default PokedexHead;
