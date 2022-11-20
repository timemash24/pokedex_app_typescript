/* eslint-disable no-plusplus */
import { getPokemonList } from 'api/getPokemonList';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addPokemons } from 'app/pokemonSlice';
import PokedexHead from 'components/PokedexHead';
import QuizGame from 'components/QuizGame';
import { QuizContainer, StartBtn } from 'components/styles/Game';
import { Container, InfoMsg, TextDisplay } from 'components/styles/Main';
import { IMG_URL, PokemonList } from 'components/Thumbnail';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// type Props = {}
const CASE_COUNT = 4;
function MiniGame() {
  const pokemonList = useAppSelector((state) => state.pokemons.pokemonList);
  // const pokemonList = useMemo(() => data, []);
  const [start, setStart] = useState<boolean>(false);
  const [answer, setAnswer] = useState<PokemonList>();
  const [qList, setQList] = useState<PokemonList[]>();

  const dispatch = useAppDispatch();

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

  const usePokemonList = async () => {
    try {
      await getPokemonList().then((res) => {
        if (res) {
          dispatch(addPokemons(res.results));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!pokemonList.length) {
      usePokemonList();
    }
    generateQ();
  }, [pokemonList]);
  return (
    <div>
      <PokedexHead text="Mini Game" isInput={false} />

      {!start ? (
        <InfoMsg>
          <p>Guess the name of Pokemon!</p>
          <StartBtn onClick={() => setStart(!start)}>GAME START🎮</StartBtn>
        </InfoMsg>
      ) : (
        <QuizContainer>{answer && qList && <QuizGame answer={answer} qList={qList} />}</QuizContainer>
      )}
    </div>
  );
}

export default MiniGame;
