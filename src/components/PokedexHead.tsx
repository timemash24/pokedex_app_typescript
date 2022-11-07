import { useAppDispatch } from 'app/hooks';
import { filterPokemons } from 'app/pokemonSlice';
import React, { useState } from 'react';
import { Circle, HeadDeco, SearchForm, TextDisplay } from './styles/Card';

type Props = {
  text: string;
  isInput: boolean;
};

function PokedexHead({ text, isInput }: Props) {
  const dispatch = useAppDispatch();
  const [textToSearch, setTextToSearch] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(filterPokemons(textToSearch.toLowerCase()));
    setTextToSearch('');
  };

  const handleTextToSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextToSearch(e.target.value);
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
      </TextDisplay>
    </HeadDeco>
  );
}

export default PokedexHead;
