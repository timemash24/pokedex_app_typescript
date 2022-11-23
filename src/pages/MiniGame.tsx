/* eslint-disable no-plusplus */
import { getPokemonList } from 'api/getPokemonList';
import { addQuiz, resetQuiz, resetScore } from 'app/gameSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addPokemons } from 'app/pokemonSlice';
import PokedexHead from 'components/PokedexHead';
import QuizGame from 'components/QuizGame';
import { QuizContainer, GameBtn, GameContainer, GameBtnContainer } from 'components/styles/Game';
import { Container, InfoMsg, TextDisplay } from 'components/styles/Main';
import { IMG_URL, PokemonList } from 'components/Thumbnail';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// type Props = {}
const CASE_COUNT = 4;
export const QUIZ_NUM = 10;

function MiniGame() {
  const pokemonList = useAppSelector((state) => state.pokemons.pokemonList);
  const score = useAppSelector((state) => state.game.score);
  const quiz = useAppSelector((state) => state.game.quiz);

  const [start, setStart] = useState<boolean>(false);
  const [answer, setAnswer] = useState<PokemonList>();
  const [qList, setQList] = useState<PokemonList[]>();
  const qCnt = useRef<number>(-1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getRandomPokemons = () => {
    const result = [];
    const arr = pokemonList.slice().filter((pokemon) => !quiz.includes(pokemon.name));
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
    dispatch(addQuiz(ans.name));
    setQList(arr);
    qCnt.current += 1;
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
    if (qCnt.current === 0) generateQ();
    else if (qCnt.current <= QUIZ_NUM) setTimeout(() => generateQ(), 700);
    else setTimeout(() => navigate('/minigame/result'), 700);
  }, [pokemonList, score]);

  useEffect(() => {
    dispatch(resetScore());
    dispatch(resetQuiz());
    setStart(false);
  }, []);

  return (
    <>
      <PokedexHead text="Mini Game" isInput={false} />
      {!start ? (
        <GameContainer>
          <p>Guess the name of Pokemon!</p>
          <GameBtnContainer>
            <GameBtn onClick={() => setStart(!start)}>GAME START🎮</GameBtn>
          </GameBtnContainer>
        </GameContainer>
      ) : (
        <QuizContainer>{answer && qList && <QuizGame answer={answer} qList={qList} />}</QuizContainer>
      )}
    </>
  );
}

export default MiniGame;
