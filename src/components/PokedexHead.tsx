import { useAppDispatch, useAppSelector } from 'app/hooks';
import { filterPokemons } from 'app/pokemonSlice';
import React, { useState } from 'react';
import { AutoComplete, AutoCompleteContainter, Circle, HeadDeco, SearchForm, TextDisplay } from './styles/Main';

type Props = {
  text: string;
  isInput: boolean;
};

function PokedexHead({ text, isInput }: Props) {
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector((state) => state.pokemons.pokemonList);
  const [textToSearch, setTextToSearch] = useState<string>('');
  const [matchedList, setMatchedList] = useState<string[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(filterPokemons(textToSearch.toLowerCase()));
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
    console.log(e.target);
    // const name = e.target.innerText;
  };

  return (
    <HeadDeco>
      <Circle color="blue" big />
      <Circle color="red" big={false} />
      <Circle color="yellow" big={false} />
      <Circle color="green" big={false} />
      <TextDisplay small={false} type="">
        {isInput ? (
          <SearchForm onSubmit={onSubmit}>
            <input type="text" placeholder={text} value={textToSearch} onChange={handleTextToSearch} />
          </SearchForm>
        ) : (
          <span>{text}</span>
        )}
        <AutoCompleteContainter>
          {matchedList.map((name) => (
            <AutoComplete key={name} onClick={onClick}>
              {name}
            </AutoComplete>
          ))}
        </AutoCompleteContainter>
      </TextDisplay>
    </HeadDeco>
  );
}

export default PokedexHead;
