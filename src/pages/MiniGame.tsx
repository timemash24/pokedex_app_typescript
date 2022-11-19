/* eslint-disable no-plusplus */
import { useAppSelector } from 'app/hooks';
import { IMG_URL, PokemonList } from 'components/Thumbnail';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// type Props = {}
const CASE_COUNT = 4;
function MiniGame() {
  const data = useAppSelector((state) => state.pokemons.pokemonList);
  const pokemonList = useMemo(() => data, []);
  const [answer, setAnswer] = useState<PokemonList>();
  const [qList, setQList] = useState<PokemonList[]>();
  const navigate = useNavigate();

  const getRandomPokemons = () => {
    const result = [];
    const arr = pokemonList.slice();
    for (let i = 0; i < CASE_COUNT; i++) {
      const randIdx = Math.floor(Math.random() * arr.length);
      result.push(...arr.splice(randIdx, 1));
    }
    return result;
  };

  const generateQ = () => {
    const arr = getRandomPokemons();
    const ans = arr[Math.floor(Math.random() * arr.length)];
    setAnswer(ans);
    setQList(arr);
  };

  useEffect(() => {
    generateQ();
  }, []);
  return (
    <div>
      <p>MiniGame</p>
      {answer && <img src={`${IMG_URL}/${answer.id}.png`} alt="question img" />}
      <ul>{qList && qList.map((q) => <li key={q.name}>{q.name}</li>)}</ul>
    </div>
  );
}

export default MiniGame;
