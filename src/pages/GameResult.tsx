import { useAppSelector } from 'app/hooks';
import PokedexHead from 'components/PokedexHead';
import { GameBtn, GameBtnContainer, GameContainer } from 'components/styles/Game';
import { InfoMsg } from 'components/styles/Main';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUIZ_NUM } from './MiniGame';

function GameResult() {
  const score = useAppSelector((state) => state.game.score);
  const totalScore = useMemo<number>(() => score.filter((item) => item).length, [score]);
  const navigate = useNavigate();
  return (
    <>
      <PokedexHead text="Score" isInput={false} />
      <GameContainer>
        <p>✨ Your Score ✨</p>
        <p>
          {totalScore} / {QUIZ_NUM}
        </p>
        <GameBtnContainer>
          <GameBtn onClick={() => navigate('/minigame')}>Restart</GameBtn>
          <GameBtn onClick={() => navigate('/')}>Home</GameBtn>
        </GameBtnContainer>
      </GameContainer>
    </>
  );
}

export default GameResult;
